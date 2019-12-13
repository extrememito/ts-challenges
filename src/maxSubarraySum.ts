const maxSubarraySum = (
  input: number[],
  consecutive: number
): number | null => {
  if (input.length < consecutive) {
    return null
  }
  const lastPossibleIndex = input.length - consecutive
  let sum = 0
  for (let i = 0; i < consecutive; i++) {
    sum += input[i]
  }
  let maxSum = sum
  for (let i = 1; i <= lastPossibleIndex; i++) {
    sum = sum - input[i - 1] + input[i + consecutive - 1]
    sum > maxSum && (maxSum = sum)
  }
  return maxSum
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)) // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 3)) // 15
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)) // 17
console.log(maxSubarraySum([4, 1, 1, 6], 1)) // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)) // 13
console.log(maxSubarraySum([], 4)) // null
