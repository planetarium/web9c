import {
  Box,
  Heading,
  Link,
  Text,
  Flex,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { Slot } from "./ui/Slot";
import { useAtom } from "jotai";
import { Account } from "../store/account";
import { AccountKeyForm } from "./AccountKeyForm";
import { useEffect } from "react";
import { useQuery } from "urql";
import { GetAccountStatusDocument } from "../graphql/graphql";

export function KeyManage() {
  const [account] = useAtom(Account);
  const isAccount =
    (account.account && account.address && account.publicKey) !== null;

  const [{ data }, reexecuteQuery] = useQuery({
    query: GetAccountStatusDocument.toString(),
    variables: { address: account.address?.toString() },
  });

  useEffect(() => {
    reexecuteQuery();
  }, [account, reexecuteQuery]);

  return (
    <Slot>
      <Flex
        justify="space-between"
        align="center"
        shadow="base"
        p="2"
        gap="2"
        borderRadius="md"
      >
        <Heading size="md">Key Status</Heading>
        <IconButton
          onClick={() => reexecuteQuery()}
          colorScheme="green"
          icon={<FontAwesomeIcon icon={faRepeat} />}
          aria-label={"Refresh"}
          size="sm"
        />
      </Flex>
      {isAccount ? (
        <Flex flexDir="column" p="2" gap="1">
          <Text as="b">Mead Status</Text>
          <Flex gap="2">
            {data?.stateQuery.pledge.patronAddress !== null ? (
              <Badge colorScheme="green">Patron Exists</Badge>
            ) : (
              <Badge colorScheme="red">No Patron</Badge>
            )}
            {data?.stateQuery.pledge.approved ? (
              <Badge colorScheme="green">Contract Approved</Badge>
            ) : (
              <Badge colorScheme="red">Contract Not Approved</Badge>
            )}
          </Flex>
          <Text as="b">9c Address</Text>
          <Text as="code">
            <Link
              bg="gray.100"
              isExternal
              href={"https://9cscan.com/address/" + account.address?.toString()}
            >
              {account.address?.toString()}
            </Link>
          </Text>
          <Text as="b">Public Key</Text>
          <Text as="code">{account.publicKey?.toHex("compressed")}</Text>
          <Flex gap="2">
            <Box p="1" bg="green.100" borderRadius="md">
              <Text as="b">NCG Balance</Text>
              <Text fontSize="xl">{data?.goldBalance ?? 0}</Text>
            </Box>
            <Box p="1" bg="green.100" borderRadius="md">
              <Text as="b">NextTxNonce</Text>
              <Text fontSize="xl">{data?.transaction.nextTxNonce ?? 0}</Text>
            </Box>
            <Box
              p="1"
              bg={data?.stateQuery.pledge.approved ? "green.100" : "red.100"}
              borderRadius="md"
            >
              <Text as="b">Mead Balance</Text>
              <Text fontSize="xl">{data?.stateQuery.pledge.mead}</Text>
            </Box>
          </Flex>
        </Flex>
      ) : (
        <AccountKeyForm />
      )}
    </Slot>
  );
}
