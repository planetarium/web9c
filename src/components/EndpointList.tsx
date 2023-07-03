import { useAtom } from "jotai";
import { Box, Heading } from "@chakra-ui/react";
import { Slot } from "./ui/Slot";
import { EndpointCard } from "./EndpointCard";
import { EndpointFamily, EndpointIDs } from "../store/endpoint";

export function EndpointList() {
  const [endpoints, setEndpoints] = useAtom(EndpointIDs);
  const remove = (id: string) => {
    EndpointFamily.remove({ id });
    setEndpoints((prev) => prev.filter((v) => v !== id));
    return;
  };

  return (
    <Slot>
      <Heading size="md">Endpoints</Heading>
      <Box>
        {endpoints.map((id) => {
          return <EndpointCard key={id} id={id} remove={remove} />;
        })}
      </Box>
    </Slot>
  );
}
