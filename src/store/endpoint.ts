import { atom, useAtom } from "jotai";
import { EndpointType } from "../types/endpoint";

export const Endpoints = atom<EndpointType[]>([
  {
    label: "Main RPC - 1",
    value: "http://9c-main-rpc-1.nine-chronicles.com/graphql",
    lastIndex: undefined,
  },
  {
    label: "Main RPC - 2",
    value: "http://9c-main-rpc-2.nine-chronicles.com/graphql",
    lastIndex: undefined,
  },
  {
    label: "Main RPC - 3",
    value: "http://9c-main-rpc-3.nine-chronicles.com/graphql",
    lastIndex: undefined,
  },
  {
    label: "Main RPC - 4",
    value: "http://9c-main-rpc-4.nine-chronicles.com/graphql",
    lastIndex: undefined,
  },
  {
    label: "Main RPC - 5",
    value: "http://9c-main-rpc-5.nine-chronicles.com/graphql",
    lastIndex: undefined,
  },
  // {
  //   label: "Ninodes RPC - Tokyo",
  //   value: "http://tky-nc-1.ninodes.com/graphql",
  //   lastIndex: undefined,
  // },
  // {
  //   label: "Ninodes RPC - Singapore",
  //   value: "http://sgp-nc-1.ninodes.com/graphql",
  //   lastIndex: undefined,
  // },
  // {
  //   label: "Ninodes RPC - New Jersey",
  //   value: "http://nj-nc-1.ninodes.com/graphql",
  //   lastIndex: undefined,
  // },
  // {
  //   label: "Ninodes RPC - Los Angeles",
  //   value: "http://la-nc-1.ninodes.com/graphql",
  //   lastIndex: undefined,
  // },
  // {
  //   label: "Ninodes RPC - France",
  //   value: "http://fra-nc-1.ninodes.com/graphql",
  //   lastIndex: undefined,
  // },
]);

export const TempEndpoint = atom<EndpointType | undefined>(undefined);

export const useLastIndex = () => {
  const [endpoints] = useAtom(Endpoints);
  const [tempEndpoint] = useAtom(TempEndpoint);
    if (!tempEndpoint) {
      return Math.max(...endpoints.map((e) => e.lastIndex || 0));
    }
    return Math.max(
      ...[...endpoints, tempEndpoint].map((e) => e.lastIndex || 0)
    );
  };
