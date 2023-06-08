import { decode } from "@planetarium/bencodex";
import { Address as LibplanetAccountAddress } from "@planetarium/account";
import { gql } from "urql";
import { z } from "zod";
import { client } from "./graphqlClient";

const GetRawStateQuery = gql`
  query ($address: Address!) {
    state(address: $address)
  }
`;

export async function getRawState(
  address: LibplanetAccountAddress
): Promise<unknown> {
  const { data, error } = await client
    .query(GetRawStateQuery, {
      address: address.toString(),
    })
    .toPromise();

  if (error) {
    throw error;
  }

  const responseSchema = z.object({
    state: z.string(),
  });
  const validatedResponse = responseSchema.parse(data);
  return decode(Buffer.from(validatedResponse.state, "hex"));
}
