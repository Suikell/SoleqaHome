export const formatSensorValue = (value: Nullable<number>) => {
  return value ? value.toFixed(1).replace(/\.0$/, '') : null
}
