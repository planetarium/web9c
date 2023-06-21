import { CreatableSelect } from "chakra-react-select";
import { EndpointType } from "../types/endpoint";
import { Endpoints, TempEndpoint } from "../store/endpoint";
import { useAtom } from "jotai";
import { useState } from "react";
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
  const [current, setCurrent] = useState<EndpointType>(endpoints[0])
  const [tempEndpoint, setTempEndpoint] = useAtom(TempEndpoint);
  return (
    <CreatableSelect
      value={endpoint || null}
      onChange={(value: EndpointType | null) => value && setEndpoint(value)}
      placeholder="Endpoint Address"
      options={endpoints}
      onCreateOption={async (value: any) => {
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
