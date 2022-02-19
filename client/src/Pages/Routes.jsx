import { React, lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import HomePage from "./HomePage/HomePage";
// import { ProfilePage } from "./ProfilePage/ProfilePage";
// import  LoginPage  from "./LoginPage/LoginPage";
// import  RegisterPage  from "./RegisterPage/RegisterPage";
const HomePage = lazy(() => import("./HomePage/HomePage"));
const LoginPage = lazy(() => import("./LoginPage/LoginPage"));
const ProfilePage = lazy(() => import("./ProfilePage/ProfilePage"));
const RegisterPage = lazy(() => import("./RegisterPage/RegisterPage"));

export const RoutesList = () => {
  const isAuth = useSelector((state) => state.userReducers._id);
  return (
    <BrowserRouter>
      <Suspense fallback={<div>loading</div>}>
        {isAuth ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </Suspense>
    </BrowserRouter>
  );
};
