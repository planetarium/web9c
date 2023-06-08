import { Address } from "@planetarium/account";
import { client } from "./graphqlClient";
import { gql } from "urql";

const GetNextNonceQuery = gql`
  query ($address: Address!) {
    transaction {
      nextTxNonce(address: $address)
    }
  }
`;

export async function getNextTxNonce(address: Address): Promise<number> {
  const { data } = await client
    .query(GetNextNonceQuery, {
      address: address.toHex(),
    })
    .toPromise();

  return data.transaction.nextTxNonce;
}
