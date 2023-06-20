import { Address, Currency } from "@planetarium/lib9c-wasm";
import { Buffer } from "buffer";

globalThis.Buffer = Buffer;

export const {
  GRAPHQL_ENDPOINT,
  GENESIS_HASH,
  NCG_CURRENCY,
  MakeTransactionUrl,
} = {
  MAINNET: {
    GRAPHQL_ENDPOINT: "https://9c-main-full-state.planetarium.dev/graphql",
    GENESIS_HASH: Buffer.from(
      "4582250d0da33b06779a8475d283d5dd210c683b9b999d74d03fac4f58fa6bce",
      "hex"
    ),
    NCG_CURRENCY: new Currency({
      ticker: "NCG",
      decimalPlaces: 2,
      minters: [new Address("0x47d082a115c63e7b58b1532d20e631538eafadde")],
    }),
    MakeTransactionUrl: (txId: string) => `https://9cscan.com/tx/${txId}`,
  },
  LOCALHOST: {
    GRAPHQL_ENDPOINT: "http://localhost:5000/graphql",
    GENESIS_HASH: Buffer.from(
      "bb045dc178dd7a25c882f86451ef9ceda9b47bb52706489c161dcb6df40aa969",
      "hex"
    ),
    NCG_CURRENCY: new Currency({
      ticker: "NCG",
      decimalPlaces: 2,
      minters: [new Address("0x5c00CBFb90eB38788ACBc650438261c09f4a53f7")],
    }),
    MakeTransactionUrl: (txId: string) =>
      `https://explorer.libplanet.io/localhost/transaction/?${txId}`,
  },
  INTERNAL_MEAD: {
    GRAPHQL_ENDPOINT:
      "https://9c-internal-mead-explorer.nine-chronicles.com/graphql",
    GENESIS_HASH: Buffer.from(
      "4582250d0da33b06779a8475d283d5dd210c683b9b999d74d03fac4f58fa6bce",
      "hex"
    ),
    NCG_CURRENCY: new Currency({
      ticker: "NCG",
      decimalPlaces: 2,
      minters: [new Address("0x47d082a115c63e7b58b1532d20e631538eafadde")],
    }),
    MakeTransactionUrl: (txId: string) =>
      `https://explorer.libplanet.io/9c-internal-mead/transaction/?${txId}`,
  },
}["MAINNET"];
