import { ButtonLink } from "../../components/ui/ButtonLink";
import useAccountMetadatas, {
  createWeb3KeyStore,
} from "../../hooks/useAccountMetadatas";
import { Layout } from "../../layouts/Layout";

const keyStore = createWeb3KeyStore();

export default function WelcomeView() {
  const accountMetadatas = useAccountMetadatas(keyStore);

  if (accountMetadatas == null) {
    return <p>Checking accounts...</p>;
  }

  const registered = accountMetadatas.length > 0;

  return (
    <Layout>
      <h1>Hello, web9c</h1>
      <>
        {registered && <ButtonLink to="/login">Login</ButtonLink>}
        <ButtonLink to="/register">Generate your own key</ButtonLink>
        <ButtonLink to="/import">Import your own key</ButtonLink>
      </>
    </Layout>
  );
}
