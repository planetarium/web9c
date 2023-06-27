import { Heading } from "@chakra-ui/react";
import { Section } from "../components/ui/Section";
import { EndpointList } from "../components/EndpointList";
import { EndpointInfo } from "../components/EndpointInfo";

export function EndpointSection() {
  return (
    <Section>
      <Heading>Endpoint</Heading>
      <EndpointList />
      <EndpointInfo />
    </Section>
  );
}
