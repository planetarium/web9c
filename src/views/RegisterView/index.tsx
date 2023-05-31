import { Layout } from "../../layouts/Layout";
import { RawPrivateKey } from "@planetarium/account";
import { LOCAL_STORAGE_KEY } from "../../constants";
import { useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import { encryptKeyObject, generateKeyId } from "../../web3-account";
import { useForm } from "react-hook-form";

interface Inputs {
  password: string;
}

export default function RegisterView() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  if (localStorage.getItem(LOCAL_STORAGE_KEY) != null) {
    navigate("/login");
  }

  function onSubmit(inputs: Inputs) {
    const rawPrivateKey = RawPrivateKey.generate();
    encryptKeyObject(generateKeyId(), rawPrivateKey, inputs.password).then(
      (keyObj) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(keyObj));
        navigate("/login");
      }
    );
  }

  return (
    <Layout>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="password" {...register("password", { required: true })} />
        <Button type="submit">Create Key</Button>
      </form>
    </Layout>
  );
}
