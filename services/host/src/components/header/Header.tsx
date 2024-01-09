import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={classes.header}>
      <Link className={classes.link} to="/">
        GENERAL
      </Link>
      <Link className={classes.link} to="/shop/main">
        SHOP ONE
      </Link>
      <Link className={classes.link} to="/shop/second">
        SHOP TWO
      </Link>
      <Link className={classes.link} to="/about/one">
        ABOUT ONE
      </Link>
      <Link className={classes.link} to="/about/two">
        ABOUT TWO
      </Link>
    </div>
  );
};
