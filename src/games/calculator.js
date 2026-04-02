import { genRandomNumber } from '../utils.js'
import runGameLogic from '../gameLogic.js'

const DESCRIPTION = 'What is the result of the expression?'

const generateRound = () => {
  const firstNum = genRandomNumber(100)
  const secondNum = genRandomNumber(100)
  const correctAnswer = firstNum + secondNum
  return [`${firstNum} + ${secondNum}`, correctAnswer.toString()]
}

const start = () => {
  runGameLogic(DESCRIPTION, generateRound)
}

export default start
