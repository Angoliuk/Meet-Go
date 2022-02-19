import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearUser } from "../../ReduxStorage/Actions/userActions";
import "./NavBar.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userReducers._id);
  return userId ? (
    <nav className="navbar">
      <Link to={"/"}>Home</Link>
      <Link to={`/profile/${userId}`}>Profile</Link>
      <p onClick={() => dispatch(clearUser())}>logout</p>
    </nav>
  ) : (
    <nav className="navbar">
      <Link to={"/login"}>Login</Link>
      <Link to={"/register"}>Register</Link>
    </nav>
  );
};
