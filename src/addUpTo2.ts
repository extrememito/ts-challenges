import { measure } from './utils/timeMeasure'

const addUpTo = (n: number) => {
  return ((n + 1) * n) / 2
}

measure(addUpTo, 10000000)
