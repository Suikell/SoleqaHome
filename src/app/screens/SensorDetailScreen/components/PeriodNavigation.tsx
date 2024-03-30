import * as React from 'react'
import { Button } from 'react-native-paper'

import { TDateRangeTypeEnum } from '~graphql/generated/graphql'
import {
  useGraphControlCtx,
  useGraphValuesCtx,
} from '~screens/SensorDetailScreen/contexts/GraphControlProvider'
import { FlexRow } from '~ui/Layout/FlexRow'
import { shrink } from '~utils/helpers/shrink'
import { toCapitalizedLowerCase } from '~utils/helpers/toCapitalizedLowerCase'

const options: RoA<TDateRangeTypeEnum> = [`HOUR`, `DAY`, `MONTH`, `YEAR`]

type TProps = NoChildren

export const PeriodNavigation: React.FC<TProps> = () => {
  const { selectedPeriod } = useGraphValuesCtx()
  const { setSelectedPeriod } = useGraphControlCtx()

  return (
    <FlexRow marginVertical={shrink(36)} alignSelf={`center`} gap={shrink(32)}>
      {options.map((option) => (
        <Button
          key={option}
          mode={option === selectedPeriod ? `contained` : `outlined`}
          onPress={() => setSelectedPeriod(option)}
        >
          {toCapitalizedLowerCase(option)}
        </Button>
      ))}
    </FlexRow>
  )
}
