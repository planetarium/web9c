import {
  BrowserRouter,
  Routes as DomRoutes,
  Navigate,
  Route,
} from "react-router-dom";
import WelcomeView from "./views/WelcomeView";
import RegisterView from "./views/RegisterView";
import LobbyView from "./views/LobbyView";
import LoginView from "./views/LoginView";
import ImportView from "./views/ImportView";
import useAccountContext from "./hooks/useAccountContext";

const Redirector = () => {
  const { privateKey } = useAccountContext();

  if (privateKey != null) {
    return <Navigate to="/lobby" />;
  }

  return <Navigate to="/welcome" />;
};

export default function Routes() {
  return (
    <BrowserRouter>
      <DomRoutes>
        <Route path="/welcome" Component={WelcomeView} />
        <Route path="/register" Component={RegisterView} />
        <Route path="/login" Component={LoginView} />
        <Route path="/lobby" Component={LobbyView} />
        <Route path="/import" Component={ImportView} />
        <Route path="/*" Component={Redirector} />
      </DomRoutes>
    </BrowserRouter>
  );
}
