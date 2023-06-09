import { useForm } from "react-hook-form";
import { sendStakeTransaction } from "../../../api";
import { RawPrivateKey } from "@planetarium/account";
import InputField from "../../../components/ui/InputField";
import Button from "../../../components/ui/Button";

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

  function onSubmit({ amount }: Inputs) {
    sendStakeTransaction(rawPrivateKey, BigInt(amount), {
      nonce,
    }).then((x) => setTxId(Buffer.from(x).toString("hex")));
  }
  return (
    <>
      <h2>Stake</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label htmlFor="amount">Amount</label>
          <InputField
            type="number"
            {...register("amount", { required: true, valueAsNumber: true })}
          />
        </div>

        <Button type="submit" className="p-2 bg-black text-white">
          Stake
        </Button>
      </form>
    </>
  );
}
