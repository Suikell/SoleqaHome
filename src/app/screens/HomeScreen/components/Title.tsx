import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'
import { useAuthCtx } from 'src/app/auth/contexts/AuthProvider'

import profile from '~images/profile.jpg'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const Title: React.FC<TProps> = () => {
  const { user } = useAuthCtx()

  return (
    <View style={styles.container}>
      <Avatar.Image size={40} source={profile} />
      <View style={styles.textContainer}>
        <Text>Hello,</Text>
        <Text style={styles.text}>{`${user.firstName} ${user.lastName}`}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    left: 0,
    marginLeft: shrink(64),
    flexDirection: 'row',
    gap: shrink(48),
    alignItems: `center`,
  },
  image: {
    resizeMode: 'contain',
    width: shrink(5),
  },
  textContainer: {
    gap: shrink(16),
  },
  text: {
    fontSize: shrink(64),
  },
})
