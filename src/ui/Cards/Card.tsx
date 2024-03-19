import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card as PaperCard, IconButton, Text } from 'react-native-paper'

import { isDefined } from '~utils/helpers/isDefined'
import { shrink } from '~utils/helpers/shrink'

type TProps = Children & {
  label: Nullable<string>
  favorite?: boolean
  setFavorite: () => void
  onPress?: PropsOf<typeof PaperCard>['onPress']
}

export const Card: React.FC<TProps> = ({
  label,
  onPress,
  favorite,
  children,
  setFavorite,
}) => {
  return (
    <PaperCard mode={`contained`} style={styles.container} onPress={onPress}>
      <View style={styles.titleContainer}>
        <Text
          numberOfLines={1}
          variant={`titleMedium`}
          style={{
            width: `65%`,
            overflow: `hidden`,
          }}
        >
          {label}
        </Text>
        {isDefined(favorite) && (
          <IconButton
            onPress={setFavorite}
            icon={`cards-heart${favorite ? `` : `-outline`}`}
          />
        )}
      </View>
      <View>{children}</View>
    </PaperCard>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: `hidden`,
    width: `48%`,
  },
  titleContainer: {
    alignSelf: `flex-start`,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: shrink(48),
  },

  name: {
    marginLeft: shrink(16),
  },
})
