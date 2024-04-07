import * as React from 'react'

import { CONTENT_MARGIN } from '~styles/spacing'
import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TProps = RequiredChildren & {
  withoutMargin?: boolean
}

export const ButtonsContainer: React.FC<TProps> = ({
  withoutMargin = false,
  children,
}) => {
  return (
    <FlexRow
      rowGap={shrink(32)}
      flexWrap={`wrap`}
      justifyContent={`space-between`}
      margin={withoutMargin ? undefined : CONTENT_MARGIN}
    >
      {children}
    </FlexRow>
  )
}
