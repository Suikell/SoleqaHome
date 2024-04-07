import * as React from 'react'

import {
  getActuatorOperatorsList,
  getSensorOperatorsList,
} from '~ui/Group/helpers/getOperatorString'
import { SelectBoxModal } from '~ui/Select/SelectBoxModal'

type TSelectBoxModalProps = OmitSafe<
  PropsOf<typeof SelectBoxModal>,
  'children' | 'options'
>

type TProps = NoChildren &
  TSelectBoxModalProps & {
    type: 'actuator' | 'sensor'
  }

export const ChooseConditionModal: React.FC<TProps> = ({
  type,
  ...modalProps
}) => {
  const operators = React.useMemo(() => {
    if (type === 'sensor') {
      return getSensorOperatorsList()
    }
    return getActuatorOperatorsList()
  }, [type])

  return <SelectBoxModal options={operators} {...modalProps} />
}
