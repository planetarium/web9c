import { Client, fetchExchange } from "urql";
import { GRAPHQL_ENDPOINT } from "../constants";

export const client = new Client({
  url: GRAPHQL_ENDPOINT,
  exchanges: [fetchExchange],
});
