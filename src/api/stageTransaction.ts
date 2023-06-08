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
      payload: Buffer.from(payload).toString("hex"),
    })
    .toPromise();

  return Buffer.from(data.stageTransaction, "hex");
}
