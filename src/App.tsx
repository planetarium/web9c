import { boot } from "@planetarium/lib9c-wasm";
import { useEffect, useState } from "react";
import Routes from "./Routes";
import { Address, RawPrivateKey } from "@planetarium/account";
import AccountContext from "./contexts/Account";
import { Provider } from "urql";
import { client } from "./api/graphqlClient";
import { ChakraProvider } from "@chakra-ui/react";
import { Spinner } from "./components/ui/Spinner";

function App() {
  const [booted, setBooted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await boot();
      setBooted(true);
    })();
  }, []);

  const [privateKey, setPrivateKey] = useState<RawPrivateKey | null>(null);
  const [address, setAddress] = useState<Address | null>(null);

  return booted ? (
    <AccountContext.Provider
      value={{ privateKey, setPrivateKey, address, setAddress }}
    >
      <Provider value={client}>
        <ChakraProvider>
          <Routes />
        </ChakraProvider>
      </Provider>
    </AccountContext.Provider>
  ) : (
    <Spinner />
  );
}

export default App;
