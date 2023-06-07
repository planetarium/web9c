import { Layout } from "../../layouts/Layout";
import { Address } from "@planetarium/account";
import { useNavigate } from "react-router";
import { useState } from "react";
import { getAvatarStates, getNcgBalance, getNextTxNonce } from "../../graphql";
import { MakeTransactionUrl } from "../../constants";
import useAccountContext from "../../hooks/useAccountContext";
import Avatar from "./Avatar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TransferTab from "./tabs/TransferTab";
import StakeTab from "./tabs/StakeTab";
import { useInterval } from "../../hooks/useInterval";

export default function LobbyView() {
  const navigate = useNavigate();

  const [state, setState] = useState<{
    address: Address;
    nextTxNonce: number;
    ncgBalance: number;
    avatarStates: ({
      name: string;
      level: number;
      actionPoint: number;
      address: string;
    } | null)[];
  } | null>(null);

  const { privateKey: nullableRawPrivateKey } = useAccountContext();

  const [txId, setTxId] = useState<string | null>(null);

  if (nullableRawPrivateKey == null) {
    navigate("/");
  }

  // eslint-disable-next-line
  const rawPrivateKey = nullableRawPrivateKey!;

  useInterval(async () => {
    const address = await rawPrivateKey.getAddress();
    const nextTxNonce = await getNextTxNonce(address);
    const ncgBalance = await getNcgBalance(address);
    const avatarStates = await getAvatarStates(address);

    setState({
      address,
      nextTxNonce,
      ncgBalance,
      avatarStates,
    });
  }, 2000);

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
          {...state.avatarStates.map((avatarState) =>
            avatarState === null ? (
              <></>
            ) : (
              <Avatar
                onClick={() =>
                  navigate(`/avatar/${avatarState.address.toString()}`)
                }
                {...avatarState}
              />
            )
          )}
        </>
      )}
      <hr className="my-5" />
      <Tabs>
        <TabList className="my-2">
          <Tab className="inline-block rounded-2xl shadow-md p-4">
            Transfer NCG
          </Tab>
          <Tab className="inline-block rounded-2xl shadow-md p-4">Stake</Tab>
        </TabList>

        <TabPanel>
          <TransferTab rawPrivateKey={rawPrivateKey} setTxId={setTxId} />
        </TabPanel>
        <TabPanel>
          <StakeTab rawPrivateKey={rawPrivateKey} setTxId={setTxId} />
        </TabPanel>
      </Tabs>
      {txId !== null && <p>Check {MakeTransactionUrl(txId)}</p>}
    </Layout>
  );
}
