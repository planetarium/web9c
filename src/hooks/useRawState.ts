import { decode } from "@planetarium/bencodex";
import { Address as LibplanetAccountAddress } from "@planetarium/account";
import { gql, useQuery } from "urql";
import { z } from "zod";
import { useEffect, useRef } from "react";

const GetRawStateQuery = gql`
  query ($address: Address!) {
    state(address: $address)
  }
`;

export function useRawState(address: LibplanetAccountAddress): unknown | null {
  const ref = useRef<unknown | null>(null);
  const [{ data, error, fetching }, executeQuery] = useQuery({
    query: GetRawStateQuery,
    variables: {
      address: address.toString(),
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

  const responseSchema = z.object({
    state: z.string(),
  });
  const validatedResponse = responseSchema.parse(data);

  ref.current = decode(Buffer.from(validatedResponse.state, "hex"));
  return ref.current;
}
