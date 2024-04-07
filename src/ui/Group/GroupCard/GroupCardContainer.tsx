import { TAppTheme } from 'App'
import * as React from 'react'
import { StyleSheet } from 'react-native'

import { TFGroupBase } from '~graphql/generated/graphql'
import { useNavigation } from '~navigation/hooks/useNavigation'
import { Card } from '~ui/Cards/Card'
import { shrink } from '~utils/helpers/shrink'
import { useStylesWithTheme } from '~utils/hooks/useStylesWithTheme'

type TProps = RequiredChildren & {
  groupId: TFGroupBase['id']
  name: TFGroupBase['name']
}

export const GroupCardContainer: React.FC<TProps> = ({
  groupId,
  name,
  children,
}) => {
  const navigation = useNavigation()

  const onCardPress = () => {
    navigation.navigate('GroupDetail', {
      groupId,
      name,
    })
  }
  const styles = useStylesWithTheme(styleCreator)
  return (
    <Card title={name} titleStyle={styles.title} onPress={onCardPress}>
      {children}
    </Card>
  )
}

const styleCreator = (theme: TAppTheme) =>
  StyleSheet.create({
    title: {
      marginTop: shrink(32),
      marginBottom: shrink(16),
    },
    label: {
      color: theme.colors.tertiary,
    },
  })
