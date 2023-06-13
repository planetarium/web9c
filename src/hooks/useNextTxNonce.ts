import { Address } from "@planetarium/account";
import { gql, useQuery } from "urql";
import { useEffect, useRef } from "react";

const GetNextNonceQuery = gql`
  query ($address: Address!) {
    transaction {
      nextTxNonce(address: $address)
    }
  }
`;

export function useNextTxNonce(address: Address): number | null {
  const ref = useRef<number | null>(null);
  const [{ data, error, fetching }, executeQuery] = useQuery({
    query: GetNextNonceQuery,
    variables: {
      address: address.toHex(),
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

  if (error) {
    throw error;
  }

  if (fetching) {
    return ref.current;
  }

  ref.current = data.transaction.nextTxNonce;
  return ref.current;
}
