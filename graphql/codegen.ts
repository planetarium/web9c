import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  generates: {
    "graphql/schema.graphql": {
      schema: ["https://9c-main-full-state.planetarium.dev/graphql"],
      plugins: ["schema-ast"],
    },
    "src/graphql/": {
      schema: ["https://9c-main-full-state.planetarium.dev/graphql"],
      documents: "graphql/query/*.graphql",
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
