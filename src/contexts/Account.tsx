import { RawPrivateKey } from "@planetarium/account";
import { createContext } from "react";

interface AccountContextProps {
  privateKey: RawPrivateKey | null;
  setPrivateKey: (privateKey: RawPrivateKey) => void;
}

const AccountContext = createContext<AccountContextProps>({
  privateKey: null,
  setPrivateKey: (_) => {},
});

export default AccountContext;
