import * as React from 'react'
import { DimensionValue, StyleSheet, View } from 'react-native'
import { Card as PaperCard, Text } from 'react-native-paper'

import { shrink } from '~utils/helpers/shrink'

type TProps = Children & {
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
  titleWidth = `65%`,
}) => {
  return (
    <PaperCard
      mode={`contained`}
      style={[styles.container, cardStyle]}
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
            ]}
          >
            {title}
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
