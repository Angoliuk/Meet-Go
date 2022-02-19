import validator from "validator";

export const useValidator = () => {
  const validateLogin = (loginData) => {
    if (!validator.isEmail(loginData.email)) {
      throw new Error("Enter email");
    }
    if (!loginData.password.length > 6) {
      throw new Error("Enter password(min lenght 6)");
    }
  };
  const validateRegister = (registerData) => {
    if (!registerData.firstname || !registerData.lastname) {
      throw new Error("Enter name");
    }
    if (!validator.isEmail(registerData.email)) {
      throw new Error("Enter email");
    }
    if (!registerData.password.length > 6) {
      throw new Error("Enter password(min lenght 6)");
    }
    if (registerData.password !== registerData.passwordCheck) {
      throw new Error("Passwords are not the same");
    }
  };
  const validateEvent = (event) => {
    if (!event.title || !event.content) {
      throw new Error("Enter event text");
    }
    if (!event.date) {
      throw new Error("Enter right date");
    }
  };
  return { validateLogin, validateRegister, validateEvent };
};
