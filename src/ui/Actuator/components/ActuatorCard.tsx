import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Switch, Text } from 'react-native-paper'
import { useDeviceUpdatersCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { TFActuatorBase } from '~graphql/generated/graphql'
import { Card } from '~ui/Cards/Card'

type TProps = NoChildren & {
  actuator: TFActuatorBase
}

export const ActuatorCard: React.FC<TProps> = ({ actuator }) => {
  const { setFavoriteActuatorValue } = useDeviceUpdatersCtx()

  const setFavorite = () => {
    setFavoriteActuatorValue(actuator, !actuator.favorite)
  }

  return (
    <Card
      label={actuator.name}
      favorite={actuator.favorite}
      setFavorite={setFavorite}
    >
      <View style={styles.content}>
        <Text variant={`labelLarge`}>State:</Text>
        <Switch value={actuator.currentState || false} />
      </View>
    </Card>
  )
}

const styles = StyleSheet.create({
  content: {
    alignItems: `center`,
    flexDirection: `row`,
    justifyContent: `space-between`,
    marginHorizontal: 16,
    marginBottom: 16,
  },
})
