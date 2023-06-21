/* eslint-disable */
import * as types from "./graphql";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  "query getBalance($address: Address!) {\n  goldBalance(address: $address)\n}":
    types.GetBalanceDocument,
  "query getLastBlockIndex($offset: Int!) {\n  chainQuery {\n    blockQuery {\n      blocks(offset: $offset, limit: 1, desc: true) {\n        index\n      }\n    }\n  }\n}":
    types.GetLastBlockIndexDocument,
  "query getNextTxNonce($address: Address!) {\n  transaction {\n    nextTxNonce(address: $address)\n  }\n}":
    types.GetNextTxNonceDocument,
  "query query($txId: TxId!) {\n  transaction {\n    transactionResult(txId: $txId) {\n      txStatus\n    }\n  }\n}":
    types.QueryDocument,
  "mutation transfer($payload: String!) {\n  stageTransaction(payload: $payload)\n}":
    types.TransferDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getBalance($address: Address!) {\n  goldBalance(address: $address)\n}"
): typeof import("./graphql").GetBalanceDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getLastBlockIndex($offset: Int!) {\n  chainQuery {\n    blockQuery {\n      blocks(offset: $offset, limit: 1, desc: true) {\n        index\n      }\n    }\n  }\n}"
): typeof import("./graphql").GetLastBlockIndexDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query getNextTxNonce($address: Address!) {\n  transaction {\n    nextTxNonce(address: $address)\n  }\n}"
): typeof import("./graphql").GetNextTxNonceDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query query($txId: TxId!) {\n  transaction {\n    transactionResult(txId: $txId) {\n      txStatus\n    }\n  }\n}"
): typeof import("./graphql").QueryDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation transfer($payload: String!) {\n  stageTransaction(payload: $payload)\n}"
): typeof import("./graphql").TransferDocument;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
