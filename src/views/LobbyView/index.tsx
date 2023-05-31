import { Layout } from "../../layouts/Layout";
import { Address } from "@planetarium/account";
import { Address as Lib9cWasmAddress, toHex } from "@planetarium/lib9c-wasm";
import { useNavigate } from "react-router";
import { useContext, useEffect, useRef, useState } from "react";
import {
  getNcgBalance,
  getNextTxNonce,
  sendTransferAssetTransaction,
} from "../../graphql";
import Button from "../../components/ui/Button";
import AccountContext from "../../contexts/Account";

export default function LobbyView() {
  const navigate = useNavigate();

  const [state, setState] = useState<{
    address: Address;
    nextTxNonce: number;
    ncgBalance: number;
  } | null>(null);

  const { privateKey: nullableRawPrivateKey } = useContext(AccountContext);

  const [txId, setTxId] = useState<string | null>(null);

  const recipientInputRef = useRef<HTMLInputElement>(null);
  const amountInputRef = useRef<HTMLInputElement>(null);
  const memoInputRef = useRef<HTMLInputElement>(null);

  if (nullableRawPrivateKey == null) {
    navigate("/");
  }

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

  function handleClick() {
    if (
      recipientInputRef.current == null ||
      amountInputRef.current == null ||
      memoInputRef.current == null
    ) {
      return;
    }

    const recipient = recipientInputRef.current.value;
    const amount = amountInputRef.current.value;
    const memo = memoInputRef.current.value;

    sendTransferAssetTransaction(
      rawPrivateKey,
      new Lib9cWasmAddress(recipient),
      parseFloat(amount),
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
      <div className="my-2">
        <label htmlFor="recipient">Recipient</label>
        <input
          className="ml-2 border-solid border-black border"
          name="recipient"
          type="text"
          ref={recipientInputRef}
        />
      </div>
      <div className="my-2">
        <label htmlFor="amount">Amount</label>
        <input
          className="ml-2 border-solid border-black border"
          name="amount"
          type="text"
          ref={amountInputRef}
        />
      </div>
      <div className="my-2">
        <label htmlFor="amount">Memo</label>
        <input
          className="ml-2 border-solid border-black border"
          name="memo"
          type="text"
          ref={memoInputRef}
        />
      </div>
      <Button className="p-2 bg-black text-white" onClick={handleClick}>
        Tranfer
      </Button>

      {txId !== null && (
        <p>
          Check {`https://explorer.libplanet.io/localhost/transaction?${txId}`}
        </p>
      )}
    </Layout>
  );
}
