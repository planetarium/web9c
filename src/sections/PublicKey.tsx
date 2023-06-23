import { Box, BoxProps, Heading, Text } from "@chakra-ui/react";
import { Account } from "../store/account";
import { useAtom } from "jotai";

export function PublicKeySection(props: BoxProps) {
  const [account, ] = useAtom(Account);

  return (
    <Box {...props}>
      <Heading as="h2" size="lg">
        Public Key
      </Heading>
      <Text color="black">{account.publicKey?.toString()}</Text>
    </Box>
  );
}
