import { Layout } from "../../layouts/Layout";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { Navigate, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { isKeyObject } from "../../web3-account";
import { decryptKeyObject } from "../../web3-account";
import useAccountContext from "../../hooks/useAccountContext";
import { useForm } from "react-hook-form";

interface Inputs {
  password: string;
}

export default function LoginView() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

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

  function onSubmit(inputs: Inputs) {
    decryptKeyObject(maybeProtectedPrivateKey, inputs.password)
      .then(({ privateKey }) => {
        setPrivateKey(privateKey);
        navigate("/lobby");
      })
      .catch(() => alert("Invalid password."));
  }

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="password" {...register("password", { required: true })} />
        <Button type="submit">Login</Button>
      </form>
    </Layout>
  );
}
