import type { CodegenConfig } from '@graphql-codegen/cli'

const schemaPath = 'src/graphql'

const config: CodegenConfig = {
  schema: `https://greenhouse.soleqa.cz/graphql/`,
  generates: {
    [`${schemaPath}/schema.json`]: {
      plugins: ['introspection'],
    },
    [`${schemaPath}/schema.graphql`]: {
      plugins: ['schema-ast'],
    },
  },
}
export default config
