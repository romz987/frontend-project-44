import { genRandomNumber } from '../utils.js'
import runGameLogic from '../gameLogic.js'

const DESCRIPTION = 'Find the greatest common divisor of given numbers.'

const calculateNod = (a, b) => {
  if (b === 0) {
    return a
  }
  return calculateNod(b, a % b)
}

const generateRound = () => {
  const firstNum = genRandomNumber(100)
  const secondNum = genRandomNumber(100)
  const correctAnswer = calculateNod(firstNum, secondNum)
  return [`${firstNum} ${secondNum}`, correctAnswer.toString()]
}

const start = () => {
  runGameLogic(DESCRIPTION, generateRound)
}

export default start
