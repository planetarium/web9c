import { Layout } from "../../layouts/Layout";
import { RawPrivateKey } from "@planetarium/account";
import { useNavigate } from "react-router";
import { Button, Input, FormControl } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { createWeb3KeyStore } from "../../hooks/useAccountMetadatas";

interface Inputs {
  password: string;
}

export default function RegisterView() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  function onSubmit(inputs: Inputs) {
    const rawPrivateKey = RawPrivateKey.generate();
    const keyStore = createWeb3KeyStore(() => inputs.password);
    keyStore.import(rawPrivateKey).then((result) => {
      if (result.result === "success") {
        navigate("/login");
      }
    });
  }

  return (
    <Layout>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            type="password"
            {...register("password", { required: true })}
          />
          <Button type="submit">Create Key</Button>
        </FormControl>
      </form>
    </Layout>
  );
}
