import { Layout } from "../../layouts/Layout";
import { RawPrivateKey } from "@planetarium/account";
import { toHex } from "@planetarium/lib9c-wasm";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";

export default function RegisterView() {
  const navigate = useNavigate();
  if (localStorage.getItem(LOCAL_STORAGE_KEY) != null) {
    navigate("/lobby");
  }

  function handleClick() {
    const rawPrivateKey = RawPrivateKey.generate();
    localStorage.setItem(LOCAL_STORAGE_KEY, toHex(rawPrivateKey.toBytes()));
    navigate("/lobby");
  }

  return (
    <Layout>
      <h1>Register</h1>
      <Button onClick={handleClick}>Create Key</Button>
    </Layout>
  );
}
