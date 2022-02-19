import { CLEAR_USER, SET_USER } from "./actionTypes";

export function setUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
  return {
    type: SET_USER,
    payload: user,
  };
}

export function autoLogin() {
  const localData = JSON.parse(localStorage.getItem("user"));
  if (localData) {
    return {
      type: SET_USER,
      payload: localData,
    };
  } else {
    return {
      type: CLEAR_USER,
    };
  }
}

export function clearUser() {
  localStorage.removeItem("user");
  return {
    type: CLEAR_USER,
  };
}
