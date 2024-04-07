import { useQGroupDetail } from '~graphql/generated/graphql'

// todo error handling
export const useLoadGroupDetail = (groupId: ID) => {
  const { data, loading } = useQGroupDetail({
    variables: {
      groupId,
    },
  })

  if (loading && !data?.group) {
    return { group: null, loading }
  }
  return {
    group: data?.group || null,
    loading,
  }
}
