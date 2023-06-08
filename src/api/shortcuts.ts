import { Account } from "@planetarium/account";
import { transfer_asset3, Address, stake2 } from "@planetarium/lib9c-wasm";
import {
  UnsignedTxWithCustomActions,
  signTx,
  encodeSignedTx,
} from "@planetarium/tx";
import { decode, encode } from "@planetarium/bencodex";
import { getNextTxNonce, stageTransaction } from ".";
import { NCG_CURRENCY, GENESIS_HASH } from "../constants";
import { TxId } from "../types";

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
