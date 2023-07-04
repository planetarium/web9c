import { Center, Flex } from "@chakra-ui/react";
import { EndpointSection } from "../sections/Endpoint";
import { AccountSection } from "../sections/Account";
import { TransactionSection } from "../sections/Transaction";

const select = <T,>(narrow: T | null, wide: T | null) => [
  narrow,
  narrow,
  narrow,
  narrow,
  wide,
];
export { Page };

function Page() {
  return (
    <Center h="100%">
      <Flex
        direction={select("column", "row")}
        width={select("60ch", "120ch")}
        gap="4"
      >
        <EndpointSection />
        <AccountSection />
        <TransactionSection />
      </Flex>
    </Center>
  );
}
