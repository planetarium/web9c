import { Heading } from "@chakra-ui/react";
import { Section } from "../components/ui/Section";
import { TransactionForm } from "../components/TransactionForm";
import { TransactionResultList } from "../components/TransactionResultList";

export function TransactionSection() {
  return (
    <Section>
      <Heading>Transaction</Heading>
      <TransactionForm />
      <TransactionResultList />
    </Section>
  );
}
