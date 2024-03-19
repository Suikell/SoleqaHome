import { TUnitTypeEnum } from '~graphql/generated/graphql'

// Define the enum
export enum UnitTypeEnum {
  TEMPERATURE = 'TEMPERATURE',
  HUMIDITY = 'HUMIDITY',
  LIGHT = 'LIGHT',
  SOIL_MOISTURE = 'SOIL_MOISTURE',
  SOIL_PH = 'SOIL_PH',
  CO2 = 'CO2',
}

// Define the type
export const getUnit = (unit: Nullable<TUnitTypeEnum>) => {
  switch (unit) {
    case UnitTypeEnum.TEMPERATURE:
      return '°C'
    case UnitTypeEnum.HUMIDITY:
      return '%'
    case UnitTypeEnum.LIGHT:
      return 'lux'
    case UnitTypeEnum.SOIL_MOISTURE:
      return '%'
    case UnitTypeEnum.SOIL_PH:
      return 'pH'
    case UnitTypeEnum.CO2:
      return 'ppm'
    default:
      return ''
  }
}
