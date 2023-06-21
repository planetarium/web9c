import { useState } from "react";
import { Center, Grid } from "@chakra-ui/react";
import { Title } from "../components/Title";
import { AddressSection } from "../sections/Address";
import { EndpointSection } from "../sections/Endpoint";
import { SendSection } from "../sections/SendSection";
import { EndpointType } from "../types/endpoint";

const select = <T,>(narrow: T | null, wide: T | null) => [
  narrow,
  narrow,
  narrow,
  narrow,
  wide,
];
export { Page };

function Page() {
  const [endpoint, setEndpoint] = useState<EndpointType | undefined>();
  const endpointState = { endpoint, setEndpoint };

  return (
    <Center h="100%">
      <Grid
        width={select("60ch", "120ch")}
        rounded="2xl"
        shadow="2xl"
        p="6"
        gap="4"
        templateColumns={select("1fr", "1fr 1fr")}
      >
        <Title />
        <AddressSection />
        <EndpointSection {...endpointState} />
        {endpoint && <SendSection />}
      </Grid>
    </Center>
  );
}
