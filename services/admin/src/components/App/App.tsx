import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";

export const App = () => {
  return (
    <div className={classes.app}>
      <div className={classes.header}>
        <span className={classes.title}>ABOUT MODULE</span>
        <div className={classes.links}>
          <Link className={classes.link} to="/about/one">
            ONE
          </Link>
          <Link className={classes.link} to="/about/two">
            TWO
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
};
