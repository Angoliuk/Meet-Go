import { CLEAR_USER, SET_USER } from "../Actions/actionTypes";

const initialState = {
  firstname: null,
  lastname: null,
  email: null,
  password: null,
  token: null,
  _id: null,
};

export default function userReducers(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.payload,
      };

    case CLEAR_USER:
      return {
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        token: null,
        _id: null,
      };

    default:
      return state;
  }
}
