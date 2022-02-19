import { useState } from "react";
import { useHttp } from "./useHttp/useHttp";
export const useUserService = () => {
  const { request } = useHttp();
  const [userLoading, setUserLoading] = useState(false);
  const getUser = async (id) => {
    try {
      setUserLoading(true);
      const newUser = await request(`/users/getOne/${id}`, "GET");
      return newUser;
    } catch (e) {
      throw new Error(e);
    } finally {
      setUserLoading(true);
    }
  };
  return { getUser, userLoading };
};
