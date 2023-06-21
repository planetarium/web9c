import { Address, PublicKey, RawPrivateKey } from "@planetarium/account";
import { atom } from "jotai";
import { Web3Account } from "@planetarium/account-web3-secret-storage";

type Keystore = {
  address: Address | null;
  privateKey: RawPrivateKey | null;
  publicKey: PublicKey | null;
  account: Web3Account | null;
};

export const Keystore = atom<Keystore>({
  address: null,
  privateKey: null,
  publicKey: null,
  account: null,
});
