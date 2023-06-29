import { Address } from "@planetarium/account";
import { gql, useQuery } from "urql";
import { useEffect, useRef } from "react";

const GetGoldBalanceQuery = gql`
  query ($address: Address!) {
    goldBalance(address: $address)
  }
`;

export function useNcgBalance(address: Address | null): number | null {
  const ref = useRef<number | null>(null);
  const [{ data, error, fetching }, executeQuery] = useQuery({
    query: GetGoldBalanceQuery,
    variables: {
      address: address?.toHex(),
    },
  });

  useEffect(() => {
    if (!fetching) {
      const id = setTimeout(
        () => executeQuery({ requestPolicy: "network-only" }),
        1000
      );
      return () => clearTimeout(id);
    }
  }, [fetching, executeQuery]);

  if (address === null) {
    return null;
  }

  if (error) {
    throw error;
  }

  if (fetching) {
    return ref.current;
  }

  ref.current = data.goldBalance;
  return ref.current;
}
