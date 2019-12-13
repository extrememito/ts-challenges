const sumZero = (input: number[]): number[] | undefined => {
  let left = 0
  let right = input.length - 1

  while (left < right) {
    const sum = input[left] + input[right]
    if (sum === 0) {
      return [input[left], input[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
  return undefined
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))
