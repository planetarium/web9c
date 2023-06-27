import { Heading } from "@chakra-ui/react";
import { Slot } from "./ui/Slot";

export function TransactionForm() {
  return (
    <Slot>
      <Heading size="md">Transaction</Heading>
    </Slot>
  );
}
