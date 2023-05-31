import { RawPrivateKey } from "@planetarium/account";
import { createContext } from "react";

interface AccountContextProps {
  privateKey: RawPrivateKey | null;
  setPrivateKey: (privateKey: RawPrivateKey) => void;
}

const AccountContext = createContext<AccountContextProps>({
  privateKey: null,
  setPrivateKey: function () {
    throw new Error("default function.");
  },
});

export default AccountContext;
