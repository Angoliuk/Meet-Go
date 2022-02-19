import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PagesWrapper } from "../../HOC/PagesWrapper";
import { useUserService } from "../../Service/useUserService";
import "./ProfilePage.css";

const ProfilePage = (props) => {
  const { showAlertHandler } = props;
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    about: "",
  });
  const id = useParams().id;
  const userService = useUserService();

  const getUser = async () => {
    try {
      const newUser = await userService.getUser(id);
      setUser(newUser);
    } catch (e) {
      showAlertHandler({
        show: true,
        text: `error ${e}`,
        type: "error",
      });
    }
  };

  useEffect(() => {
    getUser();
  });

  return (
    <div className="profilePageBlock">
      <p>
        Username: {user.firstname} {user.lastname}
      </p>
      <p> Short info about: {user?.about ? user.about : "empty"}</p>
    </div>
  );
};

export default PagesWrapper(ProfilePage);
