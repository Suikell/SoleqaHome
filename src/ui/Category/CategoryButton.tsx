import * as React from 'react'
import { Button } from 'react-native-paper'
import { useCategoriesCtx } from 'src/app/shared/contexts/CategoriesProvider'

import { isDefined } from '~utils/helpers/isDefined'

type TProps = NoChildren & {
  categoryId: NullableID
  name: Nullable<string>
}

export const CategoryButton: React.FC<TProps> = ({ categoryId, name }) => {
  const { selectedCategoryIndex, selectCategoryIndex } = useCategoriesCtx()

  const mode = React.useMemo(() => {
    if (categoryId === selectedCategoryIndex) {
      return `contained`
    }
    return `outlined`
  }, [categoryId, selectedCategoryIndex])

  if (!isDefined(categoryId) || !name) return null

  return (
    <Button mode={mode} onPress={() => selectCategoryIndex(categoryId)}>
      {name}
    </Button>
  )
}
