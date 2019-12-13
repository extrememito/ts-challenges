const countUniqueValues = (input: number[]): number => {
  if (!input.length) {
    return 0
  }
  let i = 0
  for (let j = 1; j < input.length; j++) {
    if (input[i] !== input[j]) {
      i++
      input[i] = input[j]
    }
  }
  return i + 1
}

console.log(countUniqueValues([]))
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 1]))
console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([1, 1, 1, 1, 2, 3, 3, 4, 4, 5, 6]))
