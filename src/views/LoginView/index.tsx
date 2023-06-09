import { Layout } from "../../layouts/Layout";
import { Navigate, useNavigate } from "react-router";
import Button from "../../components/ui/Button";
import useAccountContext from "../../hooks/useAccountContext";
import { useForm } from "react-hook-form";
import InputField from "../../components/ui/InputField";
import useAccountMetadatas, {
  createWeb3KeyStore,
} from "../../hooks/useAccountMetadatas";

interface Inputs {
  keyId: string;
  password: string;
}

const keyStore = createWeb3KeyStore();

export default function LoginView() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  const { setPrivateKey, setAddress } = useAccountContext();

  const accountMetadatas = useAccountMetadatas(keyStore);

  if (accountMetadatas == null) {
    return <p>Checking keys...</p>;
  }

  if (accountMetadatas.length < 1) {
    return <Navigate to="/welcome" />;
  }

  function onSubmit(
    { keyId, password }: Inputs,
    e?: React.BaseSyntheticEvent
  ): Promise<void> {
    console.log("call onSubmit");
    e?.preventDefault();

    const keyStore = createWeb3KeyStore(() => password);
    return keyStore.get(keyId).then((result) => {
      console.log("result", result, password);
      if (result.result === "success") {
        return result.account
          .exportPrivateKey()
          .then((privateKey) => {
            console.log("get private key");
            setPrivateKey(privateKey);
            return privateKey.getAddress();
          })
          .then((address) => {
            setAddress(address);
            navigate("/lobby");
            return;
          })
          .catch(console.error);
      } else if (result.result === "error") {
        console.log("error");
        throw new Error("error " + result.message);
      } else if (result.result === "keyNotFound") {
        console.log("keyNotFound");
        throw new Error("Key not found");
      }

      throw new Error("Unexpected error");
    });
  }

  return (
    <Layout>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register("keyId", { required: true })}>
          {...accountMetadatas.map(({ keyId, address }) => (
            <option key={keyId} value={keyId}>
              {address.toString()} ({keyId})
            </option>
          ))}
        </select>
        <br />
        <InputField
          type="password"
          {...register("password", { required: true })}
        />
        <Button type="submit">Login</Button>
      </form>
    </Layout>
  );
}
