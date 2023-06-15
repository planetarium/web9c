import { Layout } from "../../layouts/Layout";
import { Navigate, useNavigate } from "react-router";
import { useAccountContext, useAccountMetadatas } from "../../hooks";
import { useForm } from "react-hook-form";
import { createWeb3KeyStore } from "../../hooks/useAccountMetadatas";
import { useState } from "react";
import {
  Button,
  Input,
  FormErrorMessage,
  FormControl,
} from "@chakra-ui/react";

interface Inputs {
  keyId: string;
  password: string;
}

const keyStore = createWeb3KeyStore();

export default function LoginView() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  const { setPrivateKey, setAddress } = useAccountContext();

  const accountMetadatas = useAccountMetadatas(keyStore);
  const [loginError, setLoginError] = useState<string>();

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
    setLoading(true);
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
            setLoginError(undefined);
            navigate("/lobby");
            return;
          })
          .catch((e) => setLoginError(e.message));
      } else if (result.result === "error") {
        setLoading(false);
        console.log("error");
        setLoginError("Something wrong.");
        throw new Error("error " + result.message);
      } else if (result.result === "keyNotFound") {
        console.log("keyNotFound");
        setLoginError("Key not found");
        throw new Error("Key not found");
      }

      setLoginError("Something wrong.");
      throw new Error("Unexpected error");
    });
  }

  return (
    <Layout>
      <h1>Login</h1>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <select
            className="w-96 self-center"
            {...register("keyId", { required: true })}
          >
            {...accountMetadatas.map(({ keyId, address }) => (
              <option key={keyId} value={keyId}>
                {address.toString()} ({keyId})
              </option>
            ))}
          </select>
          <br />
          <Input
            type="password"
            isInvalid={loginError !== undefined}
            {...register("password", { required: true })}
          />
          {loginError !== undefined ? (
            <FormErrorMessage>{loginError}</FormErrorMessage>
          ) : (
            ""
          )}
          <Button
            isLoading={loading}
            size="lg"
            colorScheme="blackAlpha"
            type="submit"
          >
            Login
          </Button>
        </FormControl>
      </form>
    </Layout>
  );
}
