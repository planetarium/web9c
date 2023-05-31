import { Layout } from "../../layouts/Layout";
import { RawPrivateKey } from "@planetarium/account";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { encryptKeyObject, generateKeyId } from "../../web3-account";
import { useRef } from "react";

export default function RegisterView() {
  const navigate = useNavigate();

  const passwordInputRef = useRef<HTMLInputElement>(null);
  if (localStorage.getItem(LOCAL_STORAGE_KEY) != null) {
    navigate("/lobby");
  }

  function handleClick() {
    const rawPrivateKey = RawPrivateKey.generate();
    encryptKeyObject(
      generateKeyId(),
      rawPrivateKey,
      // eslint-disable-next-line
      passwordInputRef.current!.value
    ).then((keyObj) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(keyObj));
      navigate("/lobby");
    });
  }

  return (
    <Layout>
      <h1>Register</h1>
      <input ref={passwordInputRef} type="password" />
      <Button onClick={handleClick}>Create Key</Button>
    </Layout>
  );
}
