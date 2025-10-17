import { Route, Routes } from "react-router-dom";
import "./App.css";
import IpLayout from "./component/layout/IpLayout";
import PublicLayout from "./component/layout/PublicLayout";
import ScrollToTop from "./component/scrolltop";
import { ipRoutes, routes } from "./routes";

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          {routes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>

        <Route element={<IpLayout />}>
          {ipRoutes.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            );
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
