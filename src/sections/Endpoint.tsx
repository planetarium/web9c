import { Box, Heading } from "@chakra-ui/react";
import { EndpointSelect } from "../components/EndpointSelect";
import { EndpointType } from "../types/endpoint";
import { EndpointInfoSecion } from "./EndpointInfo";

type EndpointSectionProps = {
  endpoint: EndpointType | null;
  setEndpoint: (endpoint: EndpointType | null) => void;
};

export function EndpointSection(props: EndpointSectionProps) {
  return (
    <Box>
      <Heading as="h2" size="lg" mr="2" mb="2">
        Endpoint
      </Heading>
      <EndpointSelect {...props} />
      {props.endpoint && props.endpoint.lastIndex && (
        <EndpointInfoSecion url={props.endpoint.value} />
      )}
    </Box>
  );
}
