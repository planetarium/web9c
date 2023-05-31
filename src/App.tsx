import { boot } from "@planetarium/lib9c-wasm";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import { RawPrivateKey } from "@planetarium/account";
import AccountContext from "./contexts/Account";

function App() {
  const [booted, setBooted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await boot();
      setBooted(true);
    })();
  }, []);

  const [privateKey, setPrivateKey] = useState<RawPrivateKey | null>(null);

  return booted ? (
    <AccountContext.Provider value={{ privateKey, setPrivateKey }}>
      <Routes />
    </AccountContext.Provider>
  ) : (
    <p>"BOOTING..."</p>
  );
}

export default App;
