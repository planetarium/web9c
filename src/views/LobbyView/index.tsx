import { Layout } from "../../layouts/Layout";
import { useState } from "react";
import {
  useAccountContext,
  useAvatarStates,
  useNcgBalance,
  useNextTxNonce,
} from "../../hooks";
import Avatar from "./Avatar";
import { Tab, Tabs, TabList, TabPanel, Spinner, TabPanels } from "@chakra-ui/react";
import TransferTab from "./tabs/TransferTab";
import StakeTab from "./tabs/StakeTab";
import { Address, RawPrivateKey } from "@planetarium/account";
import { NcscanTransactionLink } from "../../components/ui/NcscanTransactionLink";
import { ButtonLink } from "../../components/ui/ButtonLink";

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
        <Spinner content="Loading States..." />
      ) : (
        <>
          <p>Address: 0x{address.toHex()}</p>
          <p>Balance: {ncgBalance}</p>
          <p>Next Tx Nonce: {nextTxNonce}</p>
          {...avatarStates.map((avatarState) =>
            avatarState === null ? <></> : <Avatar {...avatarState} />
          )}

          <hr className="my-5" />
          <Tabs variant="enclosed">
            <TabList>
              <Tab>Transfer NCG</Tab>
              <Tab c>Stake</Tab>
            </TabList>

            <TabPanels>
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
            </TabPanels>
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
      <ButtonLink to="/login">Login with other account</ButtonLink>
      <LobbyViewContent rawPrivateKey={rawPrivateKey} address={address} />
    </Layout>
  );
}
