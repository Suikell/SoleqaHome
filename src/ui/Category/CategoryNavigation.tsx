import * as React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { CategoryButton } from '~ui/Category/CategoryButton'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const CategoryNavigation: React.FC<TProps> = () => {
  const { categories } = useCategoriesCtx()

  if (!categories) {
    return null
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <CategoryButton categoryId={0} name={`All`} />
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            categoryId={category.id}
            name={category.name}
          />
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: shrink(32),
    flexDirection: `row`,
  },
})
