import { useHttp } from "./useHttp/useHttp";
import { useDispatch, useSelector } from "react-redux";
import { addEvents, setEvents } from "../ReduxStorage/Actions/eventActions";
import { useValidator } from "./validator/useValidator";
export const useEventService = () => {
  const { request } = useHttp();
  const events = useSelector((state) => state.eventReducers.events);
  const validatorService = useValidator();
  const dispatch = useDispatch();
  const create = async (event) => {
    try {
      validatorService.validateEvent(event);
      const newEvent = await request("/events/create", "POST", event);
      dispatch(addEvents([newEvent]));
    } catch (e) {
      throw new Error("event error" + e);
    }
  };

  const getAll = async () => {
    try {
      const events = await request("/events/getAll", "GET");
      dispatch(setEvents(events));
    } catch (e) {
      throw new Error("event error" + e);
    }
  };

  const patchEvent = async (updatedEvent, index) => {
    try {
      const newEvent = await request(
        `/events/update/${updatedEvent._id}`,
        "PUT",
        updatedEvent
      );
      events[index] = newEvent;
      dispatch(setEvents(events));
    } catch (e) {
      throw new Error("event error" + e);
    }
  };

  const deleteEvent = async (id) => {
    try {
      await request(`/events/delete/${id}`, "DELETE");
      dispatch(
        setEvents(events.filter((singleEvent) => singleEvent._id !== id))
      );
    } catch (e) {
      throw new Error("event error" + e);
    }
  };
  return { create, getAll, patchEvent, deleteEvent };
};
