import { atom } from "jotai";
import { atomFamily } from "jotai/utils";
import { EndpointType } from "../types/endpoint";

export const InitialEndpoints = [
  {
    label: "Main RPC - 1",
    value: "http://9c-main-rpc-1.nine-chronicles.com/graphql",
  },
  {
    label: "Main RPC - 2",
    value: "http://9c-main-rpc-2.nine-chronicles.com/graphql",
  },
  {
    label: "Main RPC - 3",
    value: "http://9c-main-rpc-3.nine-chronicles.com/graphql",
  },
  {
    label: "Main RPC - 4",
    value: "http://9c-main-rpc-4.nine-chronicles.com/graphql",
  },
  {
    label: "Main RPC - 5",
    value: "http://9c-main-rpc-5.nine-chronicles.com/graphql",
  },
];
export const Tip = atom<number>(0);
export const CurrentEndpoint = atom<string | null>(null);
export const EndpointIDs = atom<string[]>([]);
export const EndpointFamily = atomFamily(
  (endpoint: EndpointType) =>
    atom({
      id: endpoint.id,
      label: endpoint.label,
      value: endpoint.value,
      lastIndex: undefined,
      clients: undefined,
    }),
  (a: EndpointType, b: EndpointType) => a.id === b.id
);
