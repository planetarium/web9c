import { Layout } from "../../layouts/Layout";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { Navigate, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { isKeyObject } from "../../web3-account";
import { decryptKeyObject } from "../../web3-account";
import { useRef } from "react";
import useAccountContext from "../../hooks/useAccountContext";

export default function LoginView() {
  const navigate = useNavigate();

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { setPrivateKey } = useAccountContext();

  const protectedPrivateKeyItem = localStorage.getItem(LOCAL_STORAGE_KEY);
  console.log("protectedPrivateKeyItem", protectedPrivateKeyItem);
  if (protectedPrivateKeyItem == null) {
    return <Navigate to="/welcome" />;
  }

  // eslint-disable-next-line
  const maybeProtectedPrivateKey = JSON.parse(protectedPrivateKeyItem!);
  console.log("maybeProtectedPrivateKey", maybeProtectedPrivateKey);
  if (!isKeyObject(maybeProtectedPrivateKey)) {
    return <Navigate to="/welcome" />;
  }

  function handleClick() {
    // eslint-disable-next-line
    decryptKeyObject(maybeProtectedPrivateKey, passwordInputRef.current!.value)
      .then(({ privateKey }) => {
        setPrivateKey(privateKey);
        navigate("/lobby");
      })
      .catch(() => alert("Invalid password."));
  }

  return (
    <Layout>
      <h1>Login</h1>
      <input ref={passwordInputRef} name="password" type="password" />
      <Button onClick={handleClick}>Login</Button>
    </Layout>
  );
}
