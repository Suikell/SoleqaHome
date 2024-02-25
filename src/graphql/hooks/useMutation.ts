import {
  MutationHookOptions as ApolloMutationHookOptions,
  OperationVariables,
  useMutation as useApolloMutation,
} from '@apollo/client'

type TMutationDocument = FirstParam<typeof useApolloMutation>

// reexport because code-gen takes the type from the same file as the hook
export type MutationHookOptions<TData, TVariables> = ApolloMutationHookOptions<
  TData,
  TVariables
>
/**
 * Apollo Client’s `useMutation` wrapper=
 */
export const useMutation = <
  TData,
  TVariables extends OperationVariables = OperationVariables,
>(
  mutation: TMutationDocument,
  { ...hookOptions }: MutationHookOptions<TData, TVariables>,
) => {
  const [mutate, result] = useApolloMutation<TData, TVariables>(
    mutation,
    hookOptions,
  )

  return [mutate, result] as const
}
