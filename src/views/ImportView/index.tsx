import { Layout } from "../../layouts/Layout";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { Navigate, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { useRef } from "react";
import { isKeyObject } from "../../web3-account";
import useAccountContext from "../../hooks/useAccountContext";

export default function ImportView() {
  const navigate = useNavigate();
  const { privateKey } = useAccountContext();
  const keyFileInputRef = useRef<HTMLInputElement>(null);

  if (privateKey != null) {
    return <Navigate to="/lobby" />;
  }

  function handleClick() {
    // eslint-disable-next-line
    const files = keyFileInputRef.current!.files!;
    if (files.length < 1) {
      alert("Input your JSON keyfile.");
    }

    // eslint-disable-next-line
    const keyfile = files.item(0)!;
    const reader = new FileReader();
    reader.onload = () => {
      // eslint-disable-next-line
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
