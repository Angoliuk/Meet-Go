import { RoutesList } from "./Pages/Routes";
import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { autoLogin } from "./ReduxStorage/Actions/userActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);
  return <RoutesList />;
}

export default App;
