import { Button, Flex, FlexProps, Text } from "@chakra-ui/react";
import { HexToUint8Array } from "../utils/Uint8Array";
import { Account } from "../store/account";
import { useAtom } from "jotai";

export function AddressSection(props: FlexProps) {
  const [account, setAccount] = useAtom(Account);

  return (
    <Flex gap="2" alignItems="center" {...props}>
      <Text whiteSpace="nowrap" fontWeight="bold">
        Address
      </Text>
      <Text
        width="0"
        color="gray.600"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        flexGrow="1"
      >{account.address?.toString()}</Text>
      <Button size="sm" onClick={() => setAccount({ ...account, publicKey: null })}>
        Use another key
      </Button>
    </Flex>
  );
}
