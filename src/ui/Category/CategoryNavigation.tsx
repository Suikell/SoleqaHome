import * as React from 'react'
import { ScrollView } from 'react-native'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { CategoryButton } from '~ui/Category/CategoryButton'
import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'

type TProps = NoChildren

export const CategoryNavigation: React.FC<TProps> = () => {
  const { categories } = useCategoriesCtx()

  if (!categories) {
    return null
  }

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlexRow gap={shrink(32)}>
        <CategoryButton categoryId={0} name={`All`} />
        {categories.map((category) => (
          <CategoryButton
            key={category.id}
            categoryId={category.id}
            name={category.name}
          />
        ))}
      </FlexRow>
    </ScrollView>
  )
}
