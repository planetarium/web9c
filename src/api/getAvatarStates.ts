import { Address } from "@planetarium/account";
import { gql } from "urql";
import { client } from "./graphqlClient";

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

export async function getAvatarStates(address: Address): Promise<
  ({
    name: string;
    level: number;
    actionPoint: number;
    address: string;
  } | null)[]
> {
  const { data, error } = await client
    .query(GetAvatarStatesQuery, {
      address: address.toHex(),
    })
    .toPromise();

  if (error) {
    throw error;
  }

  const avatarStates = [null, null, null];
  for (const avatarState of data.stateQuery.agent.avatarStates) {
    avatarStates[avatarState.index] = avatarState;
  }

  return avatarStates;
}
