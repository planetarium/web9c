import { Address, PublicKey } from "@planetarium/account";
import { atom } from "jotai";
import {
  Web3Account,
  Web3KeyObject,
} from "@planetarium/account-web3-secret-storage";

type Keystore = {
  address: Address | null;
  publicKey: PublicKey | null;
  account: Web3Account | null;
};

export const Account = atom<Keystore>({
  address: null,
  publicKey: null,
  account: null,
});

export function createWeb3Account(
  key: Web3KeyObject,
  passphraseGetter?: () => string
) {
  const getter = passphraseGetter || (() => "UNUSED");
  const account = new Web3Account(key, {
    configurePassphrase: () => Promise.resolve(getter()),
    authenticate: (_, firstAttempt: boolean) =>
      firstAttempt
        ? Promise.resolve(getter())
        : Promise.reject(new Error("Possibly invalid Passphrase. Web3 Secret Storage decryption failed.")),
  });

  return account;
}
