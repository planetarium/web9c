import { Heading } from "@chakra-ui/react";
import { Section } from "../components/ui/Section";
import { TransactionForm } from "../components/TransactionForm";
import { ActionForm } from "../components/ActionForm";
import { TransactionResultList } from "../components/TransactionResultList";

export function TransactionSection() {
  return (
    <Section>
      <Heading>Transaction</Heading>
      <ActionForm />
      <TransactionForm />
      <TransactionResultList />
    </Section>
  );
}
