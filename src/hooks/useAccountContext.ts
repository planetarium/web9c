import { ContextType, useContext } from "react";
import AccountContext from "../contexts/Account";

export function useAccountContext(): ContextType<typeof AccountContext> {
  return useContext(AccountContext);
}
