import { Address, RawPrivateKey } from "@planetarium/account";
import { createContext } from "react";

interface AccountContextProps {
  privateKey: RawPrivateKey | null;
  setPrivateKey: (privateKey: RawPrivateKey) => void;
  address: Address | null;
  setAddress: (address: Address) => void;
}

const AccountContext = createContext<AccountContextProps>({
  privateKey: null,
  setPrivateKey: function () {
    throw new Error("default function.");
  },
  address: null,
  setAddress: function () {
    throw new Error("default function.");
  },
});

export default AccountContext;
