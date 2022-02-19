import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Components/Common/Button/Button";
import { Input } from "../../Components/Common/Input/Input";
import { PagesWrapper } from "../../HOC/PagesWrapper";
import { useAuthService } from "../../Service/useAuthService";

const LoginPage = (props) => {
  const authService = useAuthService();
  const { showAlertHandler } = props;
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginFormHandler = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const dataRequest = async () => {
    try {
      await authService.login(loginData);
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
        value={loginData.email}
        name="email"
        text="Email"
        onChange={loginFormHandler}
      />
      <Input
        value={loginData.password}
        name="password"
        text="Password"
        type="password"
        onChange={loginFormHandler}
      />
      <Button
        onClick={dataRequest}
        className="button authButton"
        text="login"
        name="login"
      />
    </div>
  );
};

export default PagesWrapper(LoginPage);
