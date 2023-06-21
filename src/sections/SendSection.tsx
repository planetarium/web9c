import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spacer,
} from '@chakra-ui/react';

export function SendSection() {
  return (
    <Box>
      <Heading as="h2" size="lg">
        Send
      </Heading>
      <Flex as="form" gap="3" flexDir="column">
        <FormControl isRequired>
          <FormLabel>Reciever Address</FormLabel>
          <Input placeholder="Reciever Address" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Amount</FormLabel>
          <Input placeholder="Amount" />
        </FormControl>
        <Spacer />
        <Button type="submit" w="full">
          Send
        </Button>
      </Flex>
    </Box>
  );
}
