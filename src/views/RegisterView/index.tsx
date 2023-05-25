import { Layout } from "../../layouts/Layout";
import { RawPrivateKey } from "@planetarium/account";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { bytesToHex } from "../../utils/convert";

export default function RegisterView() {
  const navigate = useNavigate();
  if (localStorage.getItem(LOCAL_STORAGE_KEY) != null) {
    navigate("/lobby");
  }

  function handleClick() {
    const rawPrivateKey = RawPrivateKey.generate();
    localStorage.setItem(LOCAL_STORAGE_KEY, bytesToHex(rawPrivateKey.toBytes()));
    navigate("/lobby");
  }

  return (
    <Layout>
      <h1>Register</h1>
      <Button onClick={handleClick}>Create Key</Button>
    </Layout>
  );
}
