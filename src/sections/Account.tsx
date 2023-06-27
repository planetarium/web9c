import { Heading } from "@chakra-ui/react";
import { Section } from "../components/ui/Section";
import { KeyManage } from "../components/KeyManage";
import { AvatarSelector } from "../components/AvatarSelector";

export function AccountSection() {
  return (
    <Section>
      <Heading>Account</Heading>
      <KeyManage />
      <AvatarSelector />
    </Section>
  );
}
