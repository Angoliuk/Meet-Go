import { useSelector } from "react-redux";
import { EventCard } from "../../Cards/EventCard/EventCard";

export const EventsBlock = (props) => {
  const events = useSelector((state) => state.eventReducers.events);
  return (
    <div>
      {events?.length > 0 &&
        events.map((event) => {
          return (
            <EventCard
              showAlerHandler={props.showAlerHandler}
              key={event._id}
              event={event}
            />
          );
        })}
    </div>
  );
};
