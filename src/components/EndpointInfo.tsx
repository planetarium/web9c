import { Heading } from "@chakra-ui/react";
import { Slot } from "./ui/Slot";

export function EndpointInfo() {
  return (
    <Slot>
      <Heading size="md">Current Node</Heading>
    </Slot>
  );
}
