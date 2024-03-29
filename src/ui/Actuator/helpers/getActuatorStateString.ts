import { isDefined } from '~utils/helpers/isDefined'

export const getActuatorStateString = (state?: Nullable<boolean>) => {
  if (!isDefined(state)) return 'Unknown'
  return state ? 'ON' : 'OFF'
}
