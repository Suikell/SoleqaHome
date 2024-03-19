import * as React from 'react'
import {
  useCategoriesCtx,
  useDeviceUpdatersCtx,
} from 'src/app/shared/contexts/CategoriesProvider'

import { SensorList } from '~ui/Sensor/components/SensorList'

type TProps = NoChildren

export const FavoriteSensors: React.FC<TProps> = () => {
  const { selectedCategoryIndex, favoriteSensors } = useCategoriesCtx()
  const { setFavoriteSensorValue } = useDeviceUpdatersCtx()

  const sensors = React.useMemo(() => {
    if (selectedCategoryIndex === 0) {
      return favoriteSensors
    }
    return favoriteSensors.filter(
      (sensor) => sensor.category?.id === selectedCategoryIndex,
    )
  }, [favoriteSensors, selectedCategoryIndex])

  return (
    <SensorList
      sensors={sensors}
      setFavoriteSensorValue={setFavoriteSensorValue}
    />
  )
}
