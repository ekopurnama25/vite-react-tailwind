import Home from "../pages/Home";
import StatePages from "../pages/StatePages";
import UseEffectPages from "../pages/UseEffectPages";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/state",
    element: <StatePages />,
  },
  {
    path: "/useEffect",
    element: <UseEffectPages />,
  },
];

export default routes;
