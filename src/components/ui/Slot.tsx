import { ChakraComponent, Box, BoxProps } from "@chakra-ui/react";

type DivComponent = ChakraComponent<"div", {}>;

export const Slot = ((props: BoxProps) => (
  <Box w="100%" p="2" shadow="base" {...props} />
)) as DivComponent;
