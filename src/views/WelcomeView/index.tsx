import { ButtonLink } from "../../components/ui/ButtonLink";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { Layout } from "../../layouts/Layout";

export default function WelcomeView() {
  const registered = localStorage.getItem(LOCAL_STORAGE_KEY) != null;

  return (
    <Layout>
      <h1>Hello, web9c</h1>
      {registered ? (
        <ButtonLink to="/login">Login</ButtonLink>
      ) : (
        <>
          <ButtonLink to="/register">Generate your own key</ButtonLink>
          <ButtonLink to="/import">Import your own key</ButtonLink>
        </>
      )}
    </Layout>
  );
}
