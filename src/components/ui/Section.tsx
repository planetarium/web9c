import { ChakraComponent, Flex, FlexProps } from "@chakra-ui/react";

type SectionComponent = ChakraComponent<"div", {}>;

export const Section = ((props: FlexProps) => (
  <Flex direction="column" gap="2" grow="1" align="center" {...props} />
)) as SectionComponent;
