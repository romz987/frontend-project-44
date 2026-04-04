import { genRandomNumberInRange } from '../utils.js'
import runGameLogic from '../gameLogic.js'

const DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no"'

const isPrime = (value) => {
  if (value < 2) return false
  if (value === 2) return true
  if (value % 2 === 0) return false
  for (let i = 3; i * i <= value; i += 2) {
    if (value % i === 0) return false
  }
  return true
}

const generateRound = () => {
  const num = genRandomNumberInRange(2, 100)
  const correctAnswer = isPrime(num) ? 'yes' : 'no'
  return [`${num}`, correctAnswer]
}

const start = () => {
  runGameLogic(DESCRIPTION, generateRound)
}

export default start
