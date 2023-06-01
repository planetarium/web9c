import { Client, cacheExchange, fetchExchange, gql } from "urql";
import {
  toHex,
  parseHex,
  transfer_asset3,
  Address,
  stake2,
} from "@planetarium/lib9c-wasm";
import {
  Account,
  Address as LibplanetAccountAddress,
} from "@planetarium/account";
import { TxId } from "./types";
import { decode, encode } from "@planetarium/bencodex";
import {
  UnsignedTxWithCustomActions,
  encodeSignedTx,
  signTx,
} from "@planetarium/tx";
import { GRAPHQL_ENDPOINT, NCG_CURRENCY, GENESIS_HASH } from "./constants";

const client = new Client({
  url: GRAPHQL_ENDPOINT,
  exchanges: [cacheExchange, fetchExchange],
});

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

const GetNextNonceQuery = gql`
  query ($address: Address!) {
    transaction {
      nextTxNonce(address: $address)
    }
  }
`;

export async function getNextTxNonce(
  address: LibplanetAccountAddress
): Promise<number> {
  const { data } = await client
    .query(GetNextNonceQuery, {
      address: address.toHex(),
    })
    .toPromise();

  return data.transaction.nextTxNonce;
}

const GetGoldBalanceQuery = gql`
  query ($address: Address!) {
    goldBalance(address: $address)
  }
`;

export async function getNcgBalance(
  address: LibplanetAccountAddress
): Promise<number> {
  const { data } = await client
    .query(GetGoldBalanceQuery, {
      address: address.toHex(),
    })
    .toPromise();

  return data.goldBalance;
}

const GetAvatarStatesQuery = gql`
  query ($address: Address!) {
    stateQuery {
      agent(address: $address) {
        avatarStates {
          name
          level
          index
          actionPoint
        }
      }
    }
  }
`;

export async function getAvatarStates(
  address: LibplanetAccountAddress
): Promise<
  ({
    name: string;
    level: number;
    actionPoint: number;
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

export async function sendTransferAssetTransaction(
  account: Account,
  recipient: Address,
  amount: number,
  memo: string | null
): Promise<TxId> {
  const sender = await account.getAddress();
  const action = decode(
    transfer_asset3({
      sender: new Address(sender.toHex()),
      recipient: recipient,
      amount: {
        currency: NCG_CURRENCY,
        sign: 1,
        majorUnit: amount.toFixed(),
        minorUnit: amount.toFixed(2).slice(-2),
      },
      memo: memo || "LIB9C-WASM DOESNT ALLOW NULL MEMO",
    })
  );

  const unsignedTx: UnsignedTxWithCustomActions = {
    nonce: BigInt(await getNextTxNonce(sender)),
    publicKey: (await account.getPublicKey()).toBytes("uncompressed"),
    signer: sender.toBytes(),
    timestamp: new Date(Date.now()),
    updatedAddresses: new Set(),
    genesisHash: GENESIS_HASH,
    customActions: [action],
  };

  const signed = await signTx(unsignedTx, account);
  const encodedSignedTx = encode(encodeSignedTx(signed));
  const txId = await stageTransaction(encodedSignedTx);
  return txId;
}

export async function sendStakeTransaction(
  account: Account,
  amount: bigint
): Promise<TxId> {
  const sender = await account.getAddress();
  const action = decode(
    stake2({
      amount: amount.toString(),
    })
  );

  const unsignedTx: UnsignedTxWithCustomActions = {
    nonce: BigInt(await getNextTxNonce(sender)),
    publicKey: (await account.getPublicKey()).toBytes("uncompressed"),
    signer: sender.toBytes(),
    timestamp: new Date(Date.now()),
    updatedAddresses: new Set(),
    genesisHash: GENESIS_HASH,
    customActions: [action],
  };

  const signed = await signTx(unsignedTx, account);
  const encodedSignedTx = encode(encodeSignedTx(signed));
  const txId = await stageTransaction(encodedSignedTx);
  return txId;
}
