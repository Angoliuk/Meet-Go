import { ADD_EVENTS, SET_EVENTS } from "../Actions/actionTypes";

const initialState = {
  events: null,
};

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case SET_EVENTS:
      return {
        events: [...action.payload],
      };

    case ADD_EVENTS:
      return {
        events: [...state.events, ...action.payload],
      };

    default:
      return state;
  }
}
