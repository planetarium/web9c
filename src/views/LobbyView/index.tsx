import { Layout } from "../../layouts/Layout";
import { useState } from "react";
import {
  useAccountContext,
  useAvatarStates,
  useNcgBalance,
  useNextTxNonce,
} from "../../hooks";
import Avatar from "./Avatar";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TransferTab from "./tabs/TransferTab";
import StakeTab from "./tabs/StakeTab";
import { Address, RawPrivateKey } from "@planetarium/account";
import { NcscanTransactionLink } from "../../components/ui/NcscanTransactionLink";

interface LobbyViewContentProps {
  rawPrivateKey: RawPrivateKey;
  address: Address;
}

function LobbyViewContent({ rawPrivateKey, address }: LobbyViewContentProps) {
  const avatarStates = useAvatarStates(address);
  const nextTxNonce = useNextTxNonce(address);
  const ncgBalance = useNcgBalance(address);
  const [txId, setTxId] = useState<string | null>(null);

  return (
    <>
      {avatarStates == null || ncgBalance == null || nextTxNonce == null ? (
        <p>Loading states...</p>
      ) : (
        <>
          <p>Address: 0x{address.toHex()}</p>
          <p>Balance: {ncgBalance}</p>
          <p>Next Tx Nonce: {nextTxNonce}</p>
          {...avatarStates.map((avatarState) =>
            avatarState === null ? <></> : <Avatar {...avatarState} />
          )}

          <hr className="my-5" />
          <Tabs>
            <TabList className="my-2">
              <Tab className="inline-block rounded-2xl shadow-md p-4">
                Transfer NCG
              </Tab>
              <Tab className="inline-block rounded-2xl shadow-md p-4">
                Stake
              </Tab>
            </TabList>

            <TabPanel>
              <TransferTab
                nonce={nextTxNonce}
                rawPrivateKey={rawPrivateKey}
                setTxId={setTxId}
              />
            </TabPanel>
            <TabPanel>
              <StakeTab
                rawPrivateKey={rawPrivateKey}
                setTxId={setTxId}
                nonce={nextTxNonce}
              />
            </TabPanel>
          </Tabs>
        </>
      )}
      {txId !== null && (
        <p>
          Check <NcscanTransactionLink txId={txId} />
        </p>
      )}
    </>
  );
}

export default function LobbyView() {
  const { privateKey: rawPrivateKey, address } = useAccountContext();

  if (rawPrivateKey == null || address == null) {
    return <p>Loading account...</p>;
  }

  return (
    <Layout>
      <h1>Lobby</h1>
      <LobbyViewContent rawPrivateKey={rawPrivateKey} address={address} />
    </Layout>
  );
}
