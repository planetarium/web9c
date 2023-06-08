import { toHex, parseHex } from "@planetarium/lib9c-wasm";
import { gql } from "urql";
import { TxId } from "../types";
import { client } from "./graphqlClient";

const StageTransactionMutation = gql`
  mutation ($payload: String!) {
    stageTransaction(payload: $payload)
  }
`;

export async function stageTransaction(payload: Uint8Array): Promise<TxId> {
  const { data } = await client
    .mutation(StageTransactionMutation, {
      payload: toHex(payload),
    })
    .toPromise();

  return parseHex(data.stageTransaction);
}
