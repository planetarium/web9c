import { Client, cacheExchange, fetchExchange } from "@urql/core";
import { GetLastBlockIndexDocument } from "../graphql/graphql";
import { EndpointType } from "../types/endpoint";

// FIXME: Type Definition is dirty
export async function loadSingleEndpointHealth(
  endpoint: EndpointType
): Promise<EndpointType> {
  try {
    return new Client({
      url: endpoint.value,
      exchanges: [cacheExchange, fetchExchange],
    })
      .query(GetLastBlockIndexDocument.toString(), { offset: 0 })
      .toPromise()
      .then((result) => {
        return {
          ...endpoint,
          lastIndex: result.data?.chainQuery.blockQuery?.blocks[0]
            .index as number,
        };
      });
  } catch (e) {
    return endpoint;
  }
}

export async function loadAllEndpointHealth(
  endpoints: EndpointType[],
  setEndpoints: (endpoints: EndpointType[]) => void,
  tempEndpoint: EndpointType | undefined,
  setTempEndpoint: (endpoint: EndpointType) => void
) {
  if (tempEndpoint) {
    setTempEndpoint(await loadSingleEndpointHealth(tempEndpoint));
  }

  const newEndpoints = await Promise.all(
    endpoints.map(loadSingleEndpointHealth)
  );
  setEndpoints(newEndpoints);
}
