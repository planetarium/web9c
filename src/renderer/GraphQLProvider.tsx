import { Client, Provider, fetchExchange } from "urql";

export function GraphQLProvider({ children }: { children: React.ReactNode }) {
  const client = new Client({
    url: "https://9c-main-full-state.planetarium.dev/graphql",
    exchanges: [fetchExchange],
  });

  return <Provider value={client}>{children}</Provider>;
}
