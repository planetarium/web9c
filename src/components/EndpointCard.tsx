import {
  Flex,
  Box,
  Heading,
  Button,
  Link,
  Text,
  IconButton,
  CloseButton,
  Circle,
  Spacer,
} from "@chakra-ui/react";
import { CurrentEndpoint, EndpointFamily, Tip } from "../store/endpoint";
import { useAtom } from "jotai";

export const EndpointCard = ({
  id,
  remove,
}: {
  id: string;
  remove: (id: string) => void;
}) => {
  const [endpoint] = useAtom(EndpointFamily({ id }));
  const [current, setCurrent] = useAtom(CurrentEndpoint);

  return (
    <Flex
      shadow="base"
      paddingX="4"
      paddingY="1"
      align="center"
      gap="4"
      bgColor={current === endpoint.id ? "green.100" : "inherit"}
    >
      <Circle bg="green" size="3" />
      <Flex
        flexDir="column"
        align="start"
        width="100%"
        onClick={() => {
          setCurrent(endpoint.id);
        }}
      >
        <Text as="b" fontSize="sm">
          {endpoint.label}
        </Text>
        <Text noOfLines={1} fontSize="sm">
          {endpoint.value}
        </Text>
      </Flex>
      <IconButton
        justifySelf="flex-end"
        icon={<CloseButton />}
        size="sm"
        colorScheme="red"
        onClick={() => remove(id)}
        aria-label="Remove"
      />
    </Flex>
  );
};
