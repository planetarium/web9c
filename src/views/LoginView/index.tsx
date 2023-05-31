import { Layout } from "../../layouts/Layout";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { Navigate, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { isKeyObject } from "../../web3-account";
import { decryptKeyObject } from "../../web3-account";
import { useContext, useRef } from "react";
import AccountContext from "../../contexts/Account";

export default function LoginView() {
  const navigate = useNavigate();

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const { setPrivateKey } = useContext(AccountContext);

  const protectedPrivateKeyItem = localStorage.getItem(LOCAL_STORAGE_KEY);
  console.log("protectedPrivateKeyItem", protectedPrivateKeyItem);
  if (protectedPrivateKeyItem == null) {
    return <Navigate to="/welcome" />;
  }

  const maybeProtectedPrivateKey = JSON.parse(protectedPrivateKeyItem!);
  console.log("maybeProtectedPrivateKey", maybeProtectedPrivateKey);
  if (!isKeyObject(maybeProtectedPrivateKey)) {
    return <Navigate to="/welcome" />;
  }

  function handleClick() {
    decryptKeyObject(maybeProtectedPrivateKey, passwordInputRef.current!.value)
      .then(({ privateKey }) => {
        setPrivateKey(privateKey);
        navigate("/lobby");
      })
      .catch((_) => alert("Invalid password."));
  }

  return (
    <Layout>
      <h1>Login</h1>
      <input ref={passwordInputRef} name="password" type="password" />
      <Button onClick={handleClick}>Login</Button>
    </Layout>
  );
}
