import { boot } from "@planetarium/lib9c-wasm";
import React, { useEffect, useState } from "react";
import { Center } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";
import { Spinner } from "../components/ui/Spinner";
import "../../styles.css";

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
          {booted ? <Center h="100vh">{children}</Center> : <Spinner />}
        </ChakraProvider>
      </PageContextProvider>
    </React.StrictMode>
  );
}
