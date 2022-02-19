import { ADD_EVENTS, SET_EVENTS } from "./actionTypes";

export function setEvents(events) {
  return {
    type: SET_EVENTS,
    payload: events,
  };
}

export function addEvents(events) {
  return {
    type: ADD_EVENTS,
    payload: events,
  };
}
