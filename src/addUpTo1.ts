import { measure } from './utils/timeMeasure'

const addUpTo = (n: number) => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += 1
  }
  return total
}

measure(addUpTo, 10000000)
