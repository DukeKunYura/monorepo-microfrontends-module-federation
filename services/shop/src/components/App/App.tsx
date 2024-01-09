import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";

export const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <span className={classes.title}>SHOP MODULE</span>
        <Link className={classes.link} to="/shop/new">
          NEW
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
