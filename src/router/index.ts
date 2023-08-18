import { RouteObject } from "react-router-dom";
import { lazy } from "react";

const routeConfig: RouteObject[] = [
  {
    path: "/",
    Component: lazy(() => import("@/layouts/basicLayout")),
    children: [
      {
        path: "/",
        Component: lazy(() => import("@/pages/Home")),
      },
      {
        path: "/about",
        Component: lazy(() => import("@/pages/About")),
      },
    ],
  },
  {
    path: "*",
    Component: lazy(() => import("@/pages/404")),
  },
];

export default routeConfig;
