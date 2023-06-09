import { Account } from "@planetarium/account";
import {
  transfer_asset3,
  Address,
  stake2,
  hack_and_slash21,
  Guid,
} from "@planetarium/lib9c-wasm";
import {
  UnsignedTxWithCustomActions,
  signTx,
  encodeSignedTx,
} from "@planetarium/tx";
import { decode, encode } from "@planetarium/bencodex";
import { stageTransaction } from ".";
import { NCG_CURRENCY, GENESIS_HASH } from "../constants";
import { TxId } from "../types";

interface TransactionOpts {
  nonce: number;
}

export async function sendTransferAssetTransaction(
  account: Account,
  recipient: Address,
  amount: number,
  memo: string | null,
  opts: TransactionOpts
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
    nonce: BigInt(opts.nonce),
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
  amount: bigint,
  opts: TransactionOpts
): Promise<TxId> {
  const sender = await account.getAddress();
  const action = decode(
    stake2({
      amount: amount.toString(),
    })
  );

  const unsignedTx: UnsignedTxWithCustomActions = {
    nonce: BigInt(opts.nonce),
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

export async function sendHackAndSlashTransaction(
  account: Account,
  avatarAddress: Address,
  stageId: number,
  worldId: number,
  equipments: Guid[] = [],
  costumes: Guid[] = [],
  foods: Guid[] = [],
  runeSlotInfos: { slotIndex: number; runeId: number }[] = [],
  totalPlayCount = 1,
  apStoneCount = 0,
  stageBuffId: number | null = null,
  opts: TransactionOpts
): Promise<TxId> {
  const sender = await account.getAddress();
  const action = decode(
    hack_and_slash21({
      AvatarAddress: avatarAddress,
      Equipments: equipments,
      WorldId: worldId,
      StageId: stageId,
      Costumes: costumes,
      Foods: foods,
      RuneInfos: runeSlotInfos,
      ApStoneCount: apStoneCount,
      StageBuffId: stageBuffId,
      TotalPlayCount: totalPlayCount,
    })
  );

  const unsignedTx: UnsignedTxWithCustomActions = {
    nonce: BigInt(opts.nonce),
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
