import * as React from 'react'
import { Avatar, Tooltip } from 'react-native-paper'

import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren & {
  priority?: number
}

export const PriorityBadge: React.FC<TProps> = ({ priority }) => {
  // const theme = useAppTheme()
  const priorityText = priority?.toString() ?? `-`
  return (
    <Tooltip
      title="priority"
      enterTouchDelay={0.2}
      // theme={{
      //   colors: {
      //     onSurface: theme.colors.surface,
      //     surface: theme.colors.onSurface,
      //   },
      // }}
    >
      <Avatar.Text
        style={{ marginRight: shrink(48) }}
        size={20}
        labelStyle={{ fontSize: 12, fontWeight: `bold` }}
        label={priorityText}
      />
    </Tooltip>
  )
}
