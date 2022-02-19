import React from "react";
import { useState } from "react";
import { Input } from "../../Components/Common/Input/Input";
import { Button } from "../../Components/Common/Button/Button";
import { useAuthService } from "../../Service/useAuthService";
import { PagesWrapper } from "../../HOC/PagesWrapper";
import { useNavigate } from "react-router-dom";

export const RegisterPage = (props) => {
  const { showAlertHandler } = props;
  const authService = useAuthService();
  const navigate = useNavigate();

  const [registerData, setRegisterData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordCheck: "",
    about: "",
  });

  const registerFormHandler = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const dataRequest = async () => {
    try {
      await authService.register(registerData);
      navigate("/home");
    } catch (e) {
      showAlertHandler({
        show: true,
        text: `error ${e}`,
        type: "error",
      });
    }
  };

  return (
    <div>
      <Input
        value={registerData.firstname}
        name="firstname"
        text="firstname"
        onChange={registerFormHandler}
      />
      <Input
        value={registerData.lastname}
        name="lastname"
        text="Lastname"
        onChange={registerFormHandler}
      />
      <Input
        value={registerData.email}
        name="email"
        text="Email"
        onChange={registerFormHandler}
      />
      <Input
        value={registerData.about}
        name="about"
        text="About you"
        onChange={registerFormHandler}
      />
      <Input
        value={registerData.password}
        name="password"
        type="password"
        text="Password"
        onChange={registerFormHandler}
      />
      <Input
        value={registerData.passwordCheck}
        name="passwordCheck"
        text="Repeat password"
        type="password"
        onChange={registerFormHandler}
      />
      <Button
        onClick={dataRequest}
        className="button authButton"
        text="register"
        name="register"
      />
    </div>
  );
};

export default PagesWrapper(RegisterPage);
