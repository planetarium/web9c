import { Heading } from "@chakra-ui/react";
import { Slot } from "./ui/Slot";

export function TransactionResultList() {
  return (
    <Slot>
      <Heading size="md">Transaction Status</Heading>
    </Slot>
  );
}
