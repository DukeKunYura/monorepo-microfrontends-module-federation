import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

export const Header = () => {
  const textData = "Header is rendered on the main host.";

  return (
    <div className={classes.header}>
      <div className={classes.links}>
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
      <div className={classes.info}>{textData}</div>
    </div>
  );
};
