import { useContext, useEffect } from "react";
import {
  BrowserRouter,
  Routes as DomRoutes,
  Navigate,
  Route,
  useNavigate,
} from "react-router-dom";
import WelcomeView from "./views/WelcomeView";
import RegisterView from "./views/RegisterView";
import LobbyView from "./views/LobbyView";
import AccountContext from "./contexts/Account";
import LoginView from "./views/LoginView";

const Redirector = () => {
  const { privateKey } = useContext(AccountContext);

  const navigate = useNavigate();

  if (privateKey != null) {
    return <Navigate to="/lobby" />;
  }

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
        <Route path="/login" Component={LoginView} />
        <Route path="/lobby" Component={LobbyView} />
        <Route path="/*" Component={Redirector} />
      </DomRoutes>
    </BrowserRouter>
  );
}
