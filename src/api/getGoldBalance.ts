import { Address } from "@planetarium/account";
import { gql } from "urql";
import { client } from "./graphqlClient";

const GetGoldBalanceQuery = gql`
  query ($address: Address!) {
    goldBalance(address: $address)
  }
`;

export async function getNcgBalance(address: Address): Promise<number> {
  const { data } = await client
    .query(GetGoldBalanceQuery, {
      address: address.toHex(),
    })
    .toPromise();

  return data.goldBalance;
}
