import { boot } from "@planetarium/lib9c-wasm";
import { useEffect, useState } from "react";
import Routes from "./Routes";

function App() {
  const [booted, setBooted] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      await boot();
      setBooted(true);
    })();
  }, []);

  return booted ? <Routes /> : <p>"BOOTING..."</p>;
}

export default App;
