import pkg from "chakra-react-select";
const { CreatableSelect } = pkg;
import { EndpointType } from "../types/endpoint";
import { Endpoints, TempEndpoint } from "../store/endpoint";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { loadSingleEndpointHealth } from "../utils/endpoint";

type EndpointSectionProps = {
  endpoint: EndpointType | null;
  setEndpoint: (endpoint: EndpointType | null) => void;
};

export function EndpointSelect({
  endpoint,
  setEndpoint,
}: EndpointSectionProps) {
  const [endpoints, setEndpoints] = useAtom(Endpoints);
  const [, setTempEndpoint] = useAtom(TempEndpoint);

  useEffect(() => {
    (async () => {
      setEndpoints(await Promise.all(endpoints.map(loadSingleEndpointHealth)));
    })();
  }, [endpoints, setEndpoints]);

  const sortedEndpoints = endpoints.sort(
    (a, b) => (b.lastIndex || 0) - (a.lastIndex || 0)
  );
  console.log("sortedEndpoints", sortedEndpoints);

  return (
    <CreatableSelect
      value={endpoint || null}
      onChange={(value: EndpointType | null) => value && setEndpoint(value)}
      placeholder="Endpoint Address"
      options={sortedEndpoints}
      onCreateOption={async (value: string) => {
        const newEndpoint = {
          value,
          label: value,
          lastIndex: undefined,
        };
        setTempEndpoint(await loadSingleEndpointHealth(newEndpoint));
        setEndpoint(newEndpoint);
      }}
    />
  );
}
