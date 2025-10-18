import Aion from "../work/aion";
import Info from "../info";
import Main from "../main";
import Media from "../media";

export const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/info",
    element: <Info />,
  },
  {
    path: "/media",
    element: <Media />,
  },
];

export const ipRoutes = [
  {
    path: "/work/aion2",
    element: <Aion />,
  },
];
