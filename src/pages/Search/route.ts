import { lazy } from "react";
import { SEARCH } from "routes/route.constant";
const Search = lazy(() => import("pages/Search"));

export default {
  path: SEARCH,
  element: Search,
};
