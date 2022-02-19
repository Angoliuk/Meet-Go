import { useState } from "react";
import { useSelector } from "react-redux";
import { useEventService } from "../../../Service/useEventService";
import { Button } from "../../Common/Button/Button";
import { useNavigate } from "react-router-dom";
import "./EventCard.css";

export const EventCard = ({ event, showAlertHandler }) => {
  const navigate = useNavigate();
  const eventService = useEventService();
  const user = useSelector((state) => state.userReducers);
  const events = useSelector((state) => state.eventReducers.events);
  const date = new Date(event.date).toDateString();
  const [showParticipants, setShowParticipants] = useState(false);
  const [userIndex, setUserIndex] = useState(
    event.participants.findIndex(
      (participant) => participant.userId === user._id
    )
  );
  const [enteredEvent, setEnteredEvent] = useState(
    userIndex === -1 ? false : true
  );

  const EnterEvent = async () => {
    try {
      event.participants.findIndex(
        (participant) => participant.userId === user._id
      );
      const eventIndex = events.findIndex(
        (singleEvent) => singleEvent._id === event._id
      );
      const updatedEvent = events[eventIndex];
      console.log(updatedEvent);
      if (userIndex === -1) {
        updatedEvent.participants.push({
          firstname: user.firstname,
          lastname: user.lastname,
          userId: user._id,
        });
      } else {
        updatedEvent.participants = updatedEvent.participants.filter(
          (participant) => participant.userId !== user._id
        );
      }
      setUserIndex(
        event.participants.findIndex(
          (participant) => participant.userId === user._id
        )
      );
      setEnteredEvent(!enteredEvent);
      await eventService.patchEvent(updatedEvent, eventIndex);
    } catch (e) {
      showAlertHandler({
        show: true,
        text: `error ${e}`,
        type: "error",
      });
    }

    // const eventIndex = events.findIndex((singleEvent) => singleEvent._id === event._id);
    // events[eventIndex].participants =
  };

  const deleteEvent = async (id) => {
    try {
      await eventService.deleteEvent(id);
      showAlertHandler({
        show: true,
        text: `successfully deleted`,
        type: "success",
      });
    } catch (e) {
      showAlertHandler({
        show: true,
        text: `error ${e}`,
        type: "error",
      });
    }
  };

  const showParticipantsHandler = () => {
    setShowParticipants(!showParticipants);
  };

  return (
    <div className="eventCard">
      <div className="authorBlock">
        <div className="author">
          <span onClick={() => navigate(`/profile/${event.authorId}`)}>
            {event.author}
          </span>
          <span className="eventCardDate">{date}</span>
        </div>
        <div className="eventButtonsBlock">
          {event.authorId === user._id && (
            <Button
              onClick={() => deleteEvent(event._id)}
              text={"Delete"}
              name="deleteUpload"
            />
          )}
        </div>
      </div>
      <p className="eventCardTitle">{event.title}</p>
      <p className="eventCardContent">{event.content}</p>
      <div className="participantsBlock">
        <span onClick={showParticipantsHandler}>show participants</span>
        {showParticipants && (
          <ul>
            {event.participants.length > 0 ? (
              event.participants.map((participant, i) => {
                return (
                  <li
                    onClick={() => navigate(`/profile/${participant.userId}`)}
                    key={i}
                  >
                    {participant.firstname} {participant.lastname}
                  </li>
                );
              })
            ) : (
              <span>no partisipants</span>
            )}
          </ul>
        )}
      </div>
      {event.authorId !== user._id && (
        <Button
          onClick={EnterEvent}
          className={`button buttonInCard ${enteredEvent ? "joined" : "join"}`}
          text={enteredEvent ? "joined" : "join"}
          name="enterUpload"
        />
      )}
    </div>
  );
};
