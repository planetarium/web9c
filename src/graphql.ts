import { Client, fetchExchange, gql } from "urql";
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
import { BencodexDictionary, decode, encode } from "@planetarium/bencodex";
import {
  UnsignedTxWithCustomActions,
  encodeSignedTx,
  signTx,
} from "@planetarium/tx";
import { z } from "zod";
import { GRAPHQL_ENDPOINT, NCG_CURRENCY, GENESIS_HASH } from "./constants";

const client = new Client({
  url: GRAPHQL_ENDPOINT,
  exchanges: [fetchExchange],
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
          address
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

const GetRawStateQuery = gql`
  query ($address: Address!) {
    state(address: $address)
  }
`;

export async function getRawState(
  address: LibplanetAccountAddress
): Promise<unknown> {
  const { data, error } = await client
    .query(GetRawStateQuery, {
      address: address.toString(),
    })
    .toPromise();

  if (error) {
    throw error;
  }

  const responseSchema = z.object({
    state: z.string(),
  });
  const validatedResponse = responseSchema.parse(data);
  return decode(parseHex(validatedResponse.state));
}

async function deriveAvatarInventoryAddress(
  address: LibplanetAccountAddress
): Promise<LibplanetAccountAddress> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode("inventory"),
    { name: "HMAC", hash: "SHA-1" },
    false,
    ["sign"]
  );

  const result = await crypto.subtle.sign("HMAC", key, address.toBytes());
  return LibplanetAccountAddress.fromBytes(new Uint8Array(result));
}

export const InventoryType = z.array(z.instanceof(BencodexDictionary));
type ItemType = "Consumable" | "Costume" | "Equipment" | "Material";
interface ItemBase<T extends ItemType> {
  itemType: T;
  elementalType: string;
  grade: number;
  id: number;
  itemId: string | null;
  itemSubType: string;
  requiredBlockIndex: number | null;
}

export type Item = Equipment | Material | Costume | Consumable;

export type Material = ItemBase<"Material">;
export type Consumable = ItemBase<"Consumable">;
export type Costume = ItemBase<"Costume">;

export interface Equipment extends ItemBase<"Equipment"> {
  level: number;
}

function isValidItemType(
  x: string
): x is "Equipment" | "Material" | "Costume" | "Consumable" {
  return (
    x === "Equipment" ||
    x === "Material" ||
    x === "Costume" ||
    x === "Consumable"
  );
}

export async function getAvatarInventory(address: LibplanetAccountAddress) {
  const inventoryAddress = await deriveAvatarInventoryAddress(address);
  const rawState = await getRawState(inventoryAddress);

  const parsedInventory = InventoryType.parse(rawState);
  function itemMapToObject(item: BencodexDictionary): Item {
    const rawItemId = item.get("itemId") || item.get("item_id");
    const rawRequiredBlockIndex = (item.get("requiredBlockIndex") ||
      item.get("rbi")) as number | undefined;
    const itemType = item.get("item_type") as string;
    if (!isValidItemType(itemType)) {
      throw new Error();
    }

    const base = {
      // buffSkills: rawBuffSkills === undefined ? null : rawBuffSkills,
      elementalType: item.get("elemental_type") as string,
      grade: Number(item.get("grade")),
      id: Number(item.get("id")),
      itemId:
        rawItemId === undefined
          ? null
          : Buffer.from(rawItemId as Uint8Array).toString("hex"),
      itemSubType: item.get("item_sub_type") as string,
      itemType,
      requiredBlockIndex:
        rawRequiredBlockIndex === undefined ? null : rawRequiredBlockIndex,
    };
    if (itemType === "Equipment") {
      const level = item.get("level") as bigint;
      return {
        ...base,
        level: Number(level),
      };
    }

    if (itemType === "Consumable") {
      return {
        ...base,
        itemType: "Consumable",
      };
    }

    if (itemType === "Costume") {
      return {
        ...base,
        itemType: "Costume",
      };
    }

    if (itemType === "Material") {
      return {
        ...base,
        itemType: "Material",
      };
    }

    throw new Error();
  }

  return parsedInventory.map((x) => {
    return {
      item: itemMapToObject(x.get("item") as BencodexDictionary),
      count: Number(x.get("count") as bigint),
    };
  });
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
