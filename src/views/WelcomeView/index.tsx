import { useNavigate } from "react-router";
import { ButtonLink } from "../../components/ui/ButtonLink";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { Layout } from "../../layouts/Layout";

export default function WelcomeView() {
  const navigate = useNavigate();
  if (localStorage.getItem(LOCAL_STORAGE_KEY) != null) {
    navigate("/lobby");
  }

  return (
    <Layout>
      <h1>Hello, web9c</h1>
      <ButtonLink to="/register">Generate your own key</ButtonLink>
    </Layout>
  );
}
