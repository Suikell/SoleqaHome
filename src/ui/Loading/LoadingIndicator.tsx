import * as React from 'react'
import { View } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'

type TProps = NoChildren

export const LoadingIndicator: React.FC<TProps> = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: `center`,
        alignItems: `center`,
        backgroundColor: `rgb(25, 28, 26)`,
      }}
    >
      <ActivityIndicator
        animating
        color={`rgb(111, 219, 169)`}
        size={`large`}
      />
    </View>
  )
}
