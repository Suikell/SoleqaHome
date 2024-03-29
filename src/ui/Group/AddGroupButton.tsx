import { useAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Icon } from 'react-native-paper'

import { Card } from '~ui/Cards/Card'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const AddGroupButton: React.FC<TProps> = () => {
  const theme = useAppTheme()
  return (
    <Card cardStyle={styles.container}>
      <Icon source={`plus`} size={60} color={theme.colors.primary} />
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    height: `auto`,
    alignItems: `center`,
    justifyContent: `center`,
    padding: shrink(32),
  },
})
