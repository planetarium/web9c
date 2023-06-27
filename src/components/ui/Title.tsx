import { Text, Link, Flex } from "@chakra-ui/react";
import { ReactComponent as Web9c } from "../../assets/web9c.svg";

export function Title() {
  return (
    <Flex direction="column" placeContent="center" placeItems="center" gap="1">
      <Link href="https://github.com/planetarium/web9c">
        <Web9c className="w-24 bg-transparent" />
      </Link>
      <Text
        as="span"
        display="block"
        fontSize="28px"
        lineHeight="32px"
        fontWeight="light"
      >
        Web9c
      </Text>
    </Flex>
  );
}
