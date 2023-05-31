import { Layout } from "../../layouts/Layout";
import { Address } from "@planetarium/account";
import { Address as Lib9cWasmAddress, toHex } from "@planetarium/lib9c-wasm";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import {
  getNcgBalance,
  getNextTxNonce,
  sendTransferAssetTransaction,
} from "../../graphql";
import Button from "../../components/ui/Button";
import { MakeTransactionUrl } from "../../constants";
import useAccountContext from "../../hooks/useAccountContext";
import { useForm } from "react-hook-form";
import InputField from "../../components/ui/InputField";

interface Inputs {
  recipient: string;
  amount: number;
  memo: string;
}

export default function LobbyView() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<Inputs>();

  const [state, setState] = useState<{
    address: Address;
    nextTxNonce: number;
    ncgBalance: number;
  } | null>(null);

  const { privateKey: nullableRawPrivateKey } = useAccountContext();

  const [txId, setTxId] = useState<string | null>(null);

  if (nullableRawPrivateKey == null) {
    navigate("/");
  }

  // eslint-disable-next-line
  const rawPrivateKey = nullableRawPrivateKey!;

  useEffect(() => {
    (async () => {
      const address = await rawPrivateKey.getAddress();
      const nextTxNonce = await getNextTxNonce(address);
      const ncgBalance = await getNcgBalance(address);

      setState({
        address,
        nextTxNonce,
        ncgBalance,
      });
    })();
  }, [rawPrivateKey]);

  function onSubmit({ recipient, amount, memo }: Inputs) {
    sendTransferAssetTransaction(
      rawPrivateKey,
      new Lib9cWasmAddress(recipient),
      amount,
      memo
    ).then((x) => setTxId(toHex(x)));
  }

  return (
    <Layout>
      <h1>Lobby</h1>
      {state == null ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>Address: 0x{state.address.toHex()}</p>
          <p>Balance: {state.ncgBalance}</p>
          <p>Next Tx Nonce: {state.nextTxNonce}</p>
        </>
      )}
      <hr className="my-5" />
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

      {txId !== null && <p>Check {MakeTransactionUrl(txId)}</p>}
    </Layout>
  );
}
