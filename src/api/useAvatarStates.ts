import { Address } from "@planetarium/account";
import { gql, useQuery } from "urql";
import { useEffect, useRef } from "react";

const GetAvatarStatesQuery = gql`
  query ($address: Address!) {
    stateQuery {
      agent(address: $address) {
        avatarStates {
          name
          level
          index
          actionPoint
          address
        }
      }
    }
  }
`;

type AvatarStatesType = ({
  name: string;
  level: number;
  actionPoint: number;
  address: string;
} | null)[];

export function useAvatarStates(address: Address): AvatarStatesType | null {
  const avatarStatesRef = useRef<AvatarStatesType | null>(null);
  const [{ data, error, fetching }, executeQuery] = useQuery({
    query: GetAvatarStatesQuery,
    variables: {
      address: address.toHex(),
    },
  });
  useEffect(() => {
    if (!fetching) {
      const id = setTimeout(
        () => executeQuery({ requestPolicy: "network-only" }),
        1000
      );
      return () => clearTimeout(id);
    }
  }, [fetching, executeQuery]);

  if (error) {
    throw error;
  }

  if (fetching) {
    return avatarStatesRef.current;
  }

  const avatarStates: AvatarStatesType = [null, null, null];

  for (const avatarState of data.stateQuery.agent.avatarStates) {
    avatarStates[avatarState.index] = avatarState;
  }

  avatarStatesRef.current = avatarStates;
  return avatarStatesRef.current;
}
