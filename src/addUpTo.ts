import { measure } from './utils/timeMeasure'

const addUpTo = (n: number) => {
  let total = 0
  for (let i = 1; i <= n; i++) {
    total += 1
  }
  return total
}

const addUpTo2 = (n: number) => {
  return ((n + 1) * n) / 2
}

measure(addUpTo, 10000000)

measure(addUpTo2, 10000000)
