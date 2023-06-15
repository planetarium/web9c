import { useForm } from "react-hook-form";
import { sendStakeTransaction } from "../../../api";
import { RawPrivateKey } from "@planetarium/account";
import { Button, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";

interface Inputs {
  amount: number;
}

interface StakeTabProps {
  rawPrivateKey: RawPrivateKey;
  nonce: number;
  setTxId: (txId: string) => void;
}

export default function StakeTab({
  rawPrivateKey,
  nonce,
  setTxId,
}: StakeTabProps) {
  const { register, handleSubmit } = useForm<Inputs>();
  const [loading, setLoading] = useState<boolean>(false);

  function onSubmit({ amount }: Inputs) {
    setLoading(true);
    sendStakeTransaction(rawPrivateKey, BigInt(amount), {
      nonce,
    }).then((x) => {
      setTxId(Buffer.from(x).toString("hex"));
      setLoading(false);
    });
  }
  return (
    <>
      <h2>Stake</h2>
     <FormControl onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label htmlFor="amount">Amount</label>
          <Input
            type="number"
            {...register("amount", { required: true, valueAsNumber: true })}
          />
        </div>

        <Button isLoading={loading} type="submit" className="p-2 bg-black text-white">
          Stake
        </Button>
      </FormControl>
    </>
  );
}
