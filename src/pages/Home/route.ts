import { lazy } from "react";
import { DEFAULT } from "routes/route.constant";
const Home = lazy(() => import("pages/Home"));

export default {
  path: DEFAULT,
  element: Home,
};
