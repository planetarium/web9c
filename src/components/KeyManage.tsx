import { Heading, Link, Text } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Slot } from "./ui/Slot";
import { useAtom } from "jotai";
import { Account } from "../store/account";
import { useNcgBalance, useNextTxNonce } from "../hooks";
import { usePledge } from "../hooks/usePledge";
import { Address as LibplanetAccountAddress } from "@planetarium/account";

export function KeyManage() {
  return (
    <Slot>
      <Heading size="md">Key Manage</Heading>
      <Slot>
        <Address />
        <PublicKey />
        <NcgBalance />
        <NextTxNonce />
        <Mead />
        <PatronAddress />
      </Slot>
    </Slot>
  );
}

function Address() {
  const [account] = useAtom(Account);
  if (account.address === null) {
    return <></>;
  }

  return (
    <Text>
      Address: <AddressNcscanLink address={account.address} />
    </Text>
  );
}

function PublicKey() {
  const [account] = useAtom(Account);
  if (account.publicKey === null) {
    return <></>;
  }

  return <Text>PublicKey: {account.publicKey.toHex("compressed")}</Text>;
}

function NcgBalance() {
  const [account] = useAtom(Account);
  const ncgBalance = useNcgBalance(account.address);

  if (ncgBalance === null) {
    return <></>;
  }

  return <Text>NCG: {ncgBalance}</Text>;
}

function NextTxNonce() {
  const [account] = useAtom(Account);
  const nextTxNonce = useNextTxNonce(account.address);

  if (nextTxNonce === null) {
    return <></>;
  }

  return <Text>NextTxNonce: {nextTxNonce}</Text>;
}

function Mead() {
  const [account] = useAtom(Account);
  const pledge = usePledge(account.address);

  if (pledge === null) {
    return <></>;
  }

  return <Text>Mead: {pledge.mead}</Text>;
}

function PatronAddress() {
  const [account] = useAtom(Account);
  const pledge = usePledge(account.address);

  if (pledge === null || pledge.patronAddress === null) {
    return <></>;
  }

  return (
    <Text>
      Patron:{" "}
      <AddressNcscanLink
        address={LibplanetAccountAddress.fromHex(pledge.patronAddress)}
      />
    </Text>
  );
}

function AddressNcscanLink({ address }: { address: LibplanetAccountAddress }) {
  return (
    <Link href={`https://9cscan.com/address/${address.toString()}`} isExternal>
      {address.toString()} <ExternalLinkIcon mx="2px" />
    </Link>
  );
}
