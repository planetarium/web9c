import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { Slot } from "./ui/Slot";
import { useAtom } from "jotai";
import { Account } from "../store/account";
import { Avatar } from "../store/avatar";
import { useQuery } from "urql";
import { GetAvatarStatusDocument } from "../graphql/graphql";
import { useEffect } from "react";

type AvatarStateType = {
  name: string;
  level: number;
  actionPoint: number;
  address: string;
};

export function AvatarSelector() {
  return (
    <Slot>
      <Heading shadow="base" p="2" borderRadius="md" size="md">
        Avatar
      </Heading>
      <AvatarStates />
    </Slot>
  );
}

const AvatarStates: React.FC = () => {
  const [{ address }] = useAtom(Account);
  const [{ data }, reexecuteQuery] = useQuery({
    query: GetAvatarStatusDocument.toString(),
    variables: {
      address: address?.toHex(),
    },
  });
  useEffect(() => {
    reexecuteQuery();
  }, []);

  return (
    <Flex flexDir="column" p="2" gap="2">
      {data?.stateQuery.agent?.avatarStates?.map((avatarState, index) => (
        <AvatarStateBox key={index} avatarState={avatarState} />
      )) ?? <Text>No Avatar Exists</Text>}
    </Flex>
  );
};

const MAX_ACTION_POINT = 120;

function AvatarStateBox({
  avatarState,
}: {
  avatarState: AvatarStateType | null;
}) {
  const [avatar, setAvatar] = useAtom(Avatar);

  if (avatarState === null) {
    return (
      <Box>
        <Text>Empty</Text>
      </Box>
    );
  }

  return (
    <Button
      colorScheme="gray"
      bgColor={avatar?.address === avatarState.address ? "blue.100" : "white"}
      onClick={() =>
        avatarState.address === avatar?.address
          ? setAvatar(null)
          : setAvatar(avatarState)
      }
    >
      <Text>
        {avatarState.name} | Level {avatarState.level} | AP{" "}
        {avatarState.actionPoint}/{MAX_ACTION_POINT}
      </Text>
    </Button>
  );
}
