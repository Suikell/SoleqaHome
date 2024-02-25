import * as React from 'react'

import { useSTest } from '~graphql/generated/graphql'

type TProps = NoChildren
export const Test: React.FC<TProps> = () => {
  const result = useSTest()
  console.log('in teeeeeeeeeeeeeeeeeeeeeeeeeeeeest')
  React.useEffect(() => {
    console.log(result)
  }, [result])

  return null
}
