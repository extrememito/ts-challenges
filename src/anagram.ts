import { getCharCountInWord } from './utils/frequency'

const validAnagramOld = (word1: string, word2: string): boolean => {
  if (word1.length !== word2.length) {
    return false
  }

  const frequency1 = getCharCountInWord(word1)
  const frequency2 = getCharCountInWord(word2)

  for (const char of word1) {
    if (!frequency2[char]) {
      return false
    }
    if (frequency1[char] !== frequency2[char]) {
      return false
    }
  }

  return true
}

const validAnagram = (word1: string, word2: string): boolean => {
  if (word1.length !== word2.length) {
    return false
  }

  const frequency = getCharCountInWord(word1)

  for (const char of word2) {
    if (!frequency[char]) {
      return false
    }
    frequency[char] -= 1
  }

  return true
}

console.log(validAnagram('', '')) // true

console.log(validAnagram('aaz', 'zza')) // false

console.log(validAnagram('anagram', 'nagaram')) // true

console.log(validAnagram('rat', 'car')) // false

console.log(validAnagram('rat', 'carz')) // false
