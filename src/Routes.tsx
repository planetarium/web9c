import { useEffect } from "react";
import {
  BrowserRouter,
  Routes as DomRoutes,
  Route,
  useNavigate,
} from "react-router-dom";
import WelcomeView from "./views/WelcomeView";
import RegisterView from "./views/RegisterView";
import LobbyView from "./views/LobbyView";

const Redirector = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/welcome");
  });
  return null;
};

export default function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/welcome" Component={WelcomeView} />
        <Route path="/register" Component={RegisterView} />
        <Route path="/lobby" Component={LobbyView} />
        <Route path="/*" Component={Redirector} />
      </DomRoutes>
    </BrowserRouter>
  );
}
