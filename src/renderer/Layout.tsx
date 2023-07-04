import { boot } from "@planetarium/lib9c-wasm";
import React, { useEffect, useState } from "react";
import { Center } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { Spinner } from "../components/ui/Spinner";
import "../../styles.css";
import { GraphQLProvider } from "./GraphQLProvider";

export { Layout };

function Layout({
  children,
  pageContext,
}: {
  children: React.ReactNode;
  pageContext: PageContext;
}) {
  const [booted, setBooted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await boot();
      setBooted(true);
    })();
  }, []);

  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <ChakraProvider>
          <GraphQLProvider>
            {booted ? <Center h="100vh">{children}</Center> : <Spinner />}
          </GraphQLProvider>
        </ChakraProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}
