import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema.ts",
  documents: "./src/graphql/operations/**/*.{graphql,ts}",
  generates: {
    "./src/graphql/generated/graphql.ts": {
      plugins: [
        // "typescript",
        "typescript-operations",
        "typed-document-node"
      ],
      config: {
        nonOptionalTypename: true,
        skipTypeNameForRoot: true,
      },
    },
  },
};

export default config;