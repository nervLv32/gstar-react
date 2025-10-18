import Aion from "../work/aion";
import Info from "../info";
import Main from "../main";
import Media from "../media";
import Cinder from "../work/cinder";
import TimeTakers from "../work/takers";
import Breakers from "../work/breakers";

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
  {
    path: "/work/cinder",
    element: <Cinder />,
  },
  {
    path: "/work/timetakers",
    element: <TimeTakers />,
  },
  {
    path: "/work/breakers",
    element: <Breakers />,
  },
];
