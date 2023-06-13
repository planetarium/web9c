import { Address } from "@planetarium/account";
import { Web3KeyStore } from "@planetarium/account-web3-secret-storage";
import { useEffect, useState } from "react";

export function createWeb3KeyStore(passphraseGetter?: () => string) {
  const getter = passphraseGetter || (() => "UNUSED");
  const keyStore = new Web3KeyStore({
    passphraseEntry: {
      configurePassphrase: () => Promise.resolve(getter()),
      authenticate: (_, firstAttempt: boolean) =>
        firstAttempt
          ? Promise.resolve(getter())
          : Promise.reject(new Error("Maybe invalid password.")),
    },
  });

  return keyStore;
}

export function useAccountMetadatas(keyStore: Web3KeyStore) {
  const [accountMetadatas, setAccountMetadatas] = useState<
    | {
        address: Address;
        keyId: string;
      }[]
    | null
  >(null);

  useEffect(() => {
    (async () => {
      const arr = [];
      for await (const keyMetadata of keyStore.list()) {
        arr.push({
          address: keyMetadata.metadata.address!, // eslint-disable-line @typescript-eslint/no-non-null-assertion
          keyId: keyMetadata.keyId,
        });
      }
      setAccountMetadatas(arr);
    })();
  }, [keyStore, localStorage.length]); // eslint-disable-line react-hooks/exhaustive-deps

  return accountMetadatas;
}
