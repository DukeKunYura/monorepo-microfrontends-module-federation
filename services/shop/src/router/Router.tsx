import { App } from "@/components/App/App";
import { ChildForTestNew } from "@/components/childForTest/ChildForTestNew";
import { ChildForTestOne } from "@/components/childForTest/ChildForTestOne";
import { ChildForTestTwo } from "@/components/childForTest/ChildForTestTwo";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/shop/main",
        element: (
          <Suspense fallback={"Loading..."}>
            <ChildForTestOne />
          </Suspense>
        ),
      },
      {
        path: "/shop/second",
        element: (
          <Suspense fallback={"Loading..."}>
            <ChildForTestTwo />
          </Suspense>
        ),
      },
      {
        path: "/shop/new",
        element: (
          <Suspense fallback={"Loading..."}>
            <ChildForTestNew />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
