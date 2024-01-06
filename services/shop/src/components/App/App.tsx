import { Link, Outlet } from "react-router-dom";

export const App = () => {
  return (
    <div data-testid={"App.DataTestId"}>
      <div>SHOP MODULE</div>
      <div>Hey!</div>
      <Link to="/shop/new">NEW</Link>
      <Outlet />
    </div>
  );
};
