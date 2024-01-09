import { Outlet } from "react-router-dom";
import classes from "./App.module.scss";
import { Header } from "../header/Header";

export const App = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Outlet />
    </div>
  );
};
