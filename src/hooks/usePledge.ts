import { Address } from "@planetarium/account";
import { useQuery } from "urql";
import { useEffect, useRef } from "react";
import { GetPledgeDocument } from "../graphql/graphql";

export interface PledgeType {
  approved: boolean;
  mead: number;
  patronAddress: string | null;
}

export function usePledge(address: Address | null): PledgeType | null {
  const ref = useRef<PledgeType | null>(null);
  const [{ data, error, fetching }, executeQuery] = useQuery({
    query: GetPledgeDocument.toString(),
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

  ref.current = (data?.stateQuery.pledge || null) as PledgeType | null;
  return ref.current;
}
