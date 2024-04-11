import * as React from 'react'
import { DimensionValue, StyleSheet, View } from 'react-native'
import { Card as PaperCard, Text } from 'react-native-paper'

import { shrink } from '~utils/helpers/shrink'
import { toCapitalizedLowerCase } from '~utils/helpers/toCapitalizedLowerCase'
import { useDisabledStyles } from '~utils/hooks/useDisabledStyles'

type TProps = Children & {
  disabled?: boolean
  title?: Nullable<string>
  titleWidth?: DimensionValue
  titleStyle?: PropsOf<typeof Text>['style']
  rightAction?: Nullable<React.ReactNode>
  onPress?: PropsOf<typeof PaperCard>['onPress']
  cardStyle?: PropsOf<typeof PaperCard>['style']
}

export const Card: React.FC<TProps> = ({
  title,
  onPress,
  cardStyle,
  titleStyle,
  children,
  rightAction,
  disabled = false,
  titleWidth = `65%`,
}) => {
  const disabledStyles = useDisabledStyles()
  return (
    <PaperCard
      mode={`contained`}
      style={[cardStyle, styles.container, disabled && disabledStyles.surface]}
      onPress={onPress}
    >
      {title && (
        <View style={styles.titleContainer}>
          <Text
            numberOfLines={1}
            variant={`titleMedium`}
            style={[
              {
                width: titleWidth,
                overflow: `hidden`,
              },
              titleStyle,

              disabled && disabledStyles.onSurface,
            ]}
          >
            {toCapitalizedLowerCase(title)}
          </Text>
          {rightAction}
        </View>
      )}
      {children}
    </PaperCard>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: `hidden`,
    width: `48%`,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: shrink(48),
  },
})
