import {
  Address,
  PublicKey,
  RawPrivateKey,
} from "@planetarium/account";
import { atom } from "jotai";
import { Web3KeyObject } from "@planetarium/account-web3-secret-storage";

type Keystore = {
  address: Address | null;
  keystore: Web3KeyObject | null;
  publicKey: PublicKey | null;
  account: RawPrivateKey | null;
};

const keystoreAtom = atom<Keystore>({
  address: null,
  keystore: null,
  publicKey: null,
  account: null,
});
