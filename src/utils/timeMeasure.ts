import { performance } from 'perf_hooks'

export const measure = (fn: any, ...args: any[]) => {
  const t1 = performance.now()
  fn(...args)
  const t2 = performance.now()

  console.log(`Time elapsed ${(t2 - t1) / 1000} seconds`)
}
