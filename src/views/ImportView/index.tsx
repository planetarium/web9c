import { Layout } from "../../layouts/Layout";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { Navigate, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { useContext, useRef } from "react";
import AccountContext from "../../contexts/Account";
import { isKeyObject } from "../../web3-account";

export default function ImportView() {
  const navigate = useNavigate();
  const { privateKey } = useContext(AccountContext);
  if (privateKey != null) {
    return <Navigate to="/lobby" />;
  }

  const keyFileInputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    const files = keyFileInputRef.current!.files!;
    if (files.length < 1) {
      alert("Input your JSON keyfile.");
    }

    const keyfile = files.item(0)!;
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result!;

      if (typeof result !== "string") {
        console.error("unexpected result type: ", typeof result);
        return;
      }

      if (!isKeyObject(JSON.parse(result))) {
        alert("wrong keyitem");
      }

      localStorage.setItem(LOCAL_STORAGE_KEY, result);

      navigate("/login");
    };

    reader.readAsText(keyfile);
  }

  return (
    <Layout>
      <h1>Import</h1>
      <input ref={keyFileInputRef} type="file" />
      <Button onClick={handleClick}>Import Key</Button>
    </Layout>
  );
}
