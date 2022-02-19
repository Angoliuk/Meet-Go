import { useDispatch } from "react-redux";
import { setUser } from "../ReduxStorage/Actions/userActions";
import { useHttp } from "./useHttp/useHttp";
import { useValidator } from "./validator/useValidator";
export const useAuthService = () => {
  const { request } = useHttp();
  const dispatch = useDispatch();
  const validatorService = useValidator();
  const register = async (user) => {
    try {
      validatorService.validateRegister(user);
      delete user.passwordCheck;
      const newUser = await request("/auth/register", "POST", user);
      dispatch(setUser(newUser));
    } catch (e) {
      throw new Error(e);
    }
  };
  const login = async (user) => {
    try {
      validatorService.validateLogin(user);
      const newUser = await request("/auth/login", "POST", user);
      dispatch(setUser(newUser));
    } catch (e) {
      throw new Error(e);
    }
  };
  return { register, login };
};
