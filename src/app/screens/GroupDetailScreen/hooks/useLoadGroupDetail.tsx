import { useStatusToastCtx } from 'src/app/shared/contexts/StatusToastProvider'

import { useQGroupDetail } from '~graphql/generated/graphql'

export const useLoadGroupDetail = (groupId: ID) => {
  const { presentStatusToast } = useStatusToastCtx()
  const { data, loading, error } = useQGroupDetail({
    variables: {
      groupId,
    },
  })

  if (error) {
    presentStatusToast('error', error.message)
  }

  if (loading && !data?.group) {
    return { group: null, loading }
  }

  return {
    group: data?.group || null,
    loading,
  }
}
