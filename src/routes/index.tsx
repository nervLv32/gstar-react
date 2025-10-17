import Aion from "../work/aion";
import Info from "../info";
import Main from "../main";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/info",
    element: <Info />,
  },
];

export const ipRoutes = [
  {
    path: "/work/aion2",
    element: <Aion />,
  },
];
