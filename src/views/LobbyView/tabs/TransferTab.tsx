import { useForm } from "react-hook-form";
import { sendTransferAssetTransaction } from "../../../api";
import { RawPrivateKey } from "@planetarium/account";
import { Address as Lib9cWasmAddress } from "@planetarium/lib9c-wasm";
import InputField from "../../../components/ui/InputField";
import Button from "../../../components/ui/Button";

interface Inputs {
  recipient: string;
  amount: number;
  memo: string;
}

interface TransferTabProps {
  rawPrivateKey: RawPrivateKey;
  nonce: number;
  setTxId: (txId: string) => void;
}

export default function TransferTab({
  rawPrivateKey,
  nonce,
  setTxId,
}: TransferTabProps) {
  const { register, handleSubmit } = useForm<Inputs>();

  function onSubmit({ recipient, amount, memo }: Inputs) {
    sendTransferAssetTransaction(
      rawPrivateKey,
      new Lib9cWasmAddress(recipient),
      amount,
      memo,
      {
        nonce,
      }
    ).then((x) => setTxId(Buffer.from(x).toString("hex")));
  }
  return (
    <>
      <h2>Transfer NCG</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <label htmlFor="recipient">Recipient</label>
          <InputField
            type="text"
            {...register("recipient", { required: true })}
          />
        </div>
        <div className="my-2">
          <label htmlFor="amount">Amount</label>
          <InputField
            type="number"
            {...register("amount", { required: true, valueAsNumber: true })}
          />
        </div>
        <div className="my-2">
          <label htmlFor="memo">Memo</label>
          <InputField type="text" {...register("memo", { required: true })} />
        </div>

        <Button type="submit" className="p-2 bg-black text-white">
          Tranfer
        </Button>
      </form>
    </>
  );
}
