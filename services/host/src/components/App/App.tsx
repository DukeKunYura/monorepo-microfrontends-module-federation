import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";

export const App = () => {
  return (
    <div data-testid={"App.DataTestId"}>
      <div>HOST</div>
      <Link to="/shop/main">SHOP</Link>
      <br />
      <Link to="/shop/second">SHOP SECOND</Link>
      <br />
      <Link to="/about/one">ABOUT ONE</Link>
      <br />
      <Link to="/about/two">ABOUT Two</Link>
      <Outlet />
    </div>
  );
};
