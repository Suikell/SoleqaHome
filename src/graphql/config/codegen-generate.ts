import type { CodegenConfig } from '@graphql-codegen/cli'

// https://www.graphql-code-generator.com/docs/plugins/index
const pluginConfig = {
  // https://www.graphql-code-generator.com/docs/plugins/typescript
  // https://www.graphql-code-generator.com/docs/plugins/typescript-operations
  // https://www.graphql-code-generator.com/docs/plugins/typescript-react-apollo
  avoidOptionals: {
    field: true,
    inputValue: false, // allow not-passing of optional fields in input types (eg. InputRecipeCreate) so we don't have to provide `null` every time
    object: false, // allow not-passing of optional arguments to operations so we don't have to provide `null` every time
    defaultValue: true,
  },
  enumsAsTypes: true,
  immutableTypes: true,
  declarationKind: 'type',
  namingConvention: {
    typeNames: 'pascal-case#pascalCase',
    transformUnderscore: true,
  },
  typesPrefix: 'T',
  omitOperationSuffix: true,
  arrayInputCoercion: false, // forbid using single values when the param is an array (GQL allows that)
  apolloReactHooksImportFrom: `../hooks`, // use custom hook overrides
  apolloReactCommonImportFrom: `@apollo/client`, // keep the import backward compatible
}

const config: CodegenConfig = {
  schema: `src/graphql/schema.json`,
  generates: {
    [`src/graphql/generated/graphql.ts`]: {
      documents: `src/graphql/**/*.gql`,
      config: pluginConfig,
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
}

export default config
