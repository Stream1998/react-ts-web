import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routeConfig from "./router";
import Loading from "./components/Loading";
const router = createBrowserRouter(routeConfig);
import "@/assets/scss/app.scss";
import "@/assets/scss/reset.scss";

const root = createRoot(document.querySelector("#app") as HTMLDivElement);
root.render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
