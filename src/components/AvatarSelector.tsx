import { Heading, Text } from "@chakra-ui/react";
import { Slot } from "./ui/Slot";
import { useAvatarStates } from "../hooks";
import type { AvatarStateType } from "../hooks/useAvatarStates";
import { useAtom } from "jotai";
import { Account } from "../store/account";
import { Avatar } from "../store/avatar";

export function AvatarSelector() {
  return (
    <Slot>
      <Heading size="md">Avatar</Heading>
      <AvatarStates />
    </Slot>
  );
}

const AvatarStates: React.FC = () => {
  const [{ address }] = useAtom(Account);
  const avatarStates = useAvatarStates(address);

  return (
    <Slot>
      {...avatarStates?.map((avatarState, index) => (
        <AvatarStateBox key={index} avatarState={avatarState} />
      )) ?? [<Text>There is no character.</Text>]}
    </Slot>
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
      <Slot>
        <Text>Empty</Text>
      </Slot>
    );
  }

  return (
    <Slot
      bgColor={avatar?.address === avatarState.address ? "blue.100" : "white"}
      onClick={() =>
        avatarState.address === avatar?.address
          ? setAvatar(null)
          : setAvatar(avatarState)
      }
    >
      <Text>
        name={avatarState.name} | level={avatarState.level} | AP=
        {avatarState.actionPoint}/{MAX_ACTION_POINT}
      </Text>
    </Slot>
  );
}
