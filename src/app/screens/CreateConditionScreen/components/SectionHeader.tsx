import { TAppTheme, useAppTheme } from 'App'
import * as React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import { Icon, Text } from 'react-native-paper'

import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TProps = NoChildren & {
  onPress: () => void
  title: string
  isVisible: boolean
}

export const SectionHeader: React.FC<TProps> = ({
  title,
  isVisible,
  onPress,
}) => {
  const theme = useAppTheme()
  const styles = useStylesWithTheme(styleCreator)

  const [isPressed, setIsPressed] = React.useState(false)
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={{
        backgroundColor: isPressed ? theme.colors.onPressPrimary : undefined,
      }}
    >
      <FlexRow
        justifyContent={`space-between`}
        borderBottomWidth={1}
        padding={shrink(32)}
        borderBottomColor={theme.colors.tertiary}
      >
        <Text style={styles.section} variant="bodyLarge">
          {title}
        </Text>
        <Icon
          source={isVisible ? `minus` : `chevron-down`}
          size={30}
          color={theme.colors.tertiary}
        />
      </FlexRow>
    </Pressable>
  )
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    section: {
      color: theme.colors.tertiary,
    },
  })
