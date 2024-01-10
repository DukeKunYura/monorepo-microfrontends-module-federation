import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";

export const App = () => {
  const textData = "The store section is rendered by the shop microservice.";

  return (
    <div className={classes.app}>
      <div className={classes.header_shop}>
        <span className={classes.title}>SHOP MODULE</span>
        <div className={classes.info}>{textData}</div>
        <Link className={classes.link} to="/shop/new">
          NEW
        </Link>
      </div>
      <Outlet />
    </div>
  );
};
