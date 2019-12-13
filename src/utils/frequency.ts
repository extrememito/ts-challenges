interface Frequency {
  [key: string]: number
}

export const getCharCountInWord = (word: string): Frequency => {
  const frequency: Frequency = {}
  for (const char of word) {
    frequency[char] = (frequency[char] || 0) + 1
  }
  return frequency
}
