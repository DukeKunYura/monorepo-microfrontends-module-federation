import { App } from "@/components/App/App";
import { About } from "@/pages/about";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about/one",
        element: (
          <Suspense fallback={"Loading..."}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/about/two",
        element: (
          <Suspense fallback={"Loading..."}>
            <About />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);

export default routes;
