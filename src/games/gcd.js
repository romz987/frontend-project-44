import { genRandomNumber } from "../utils.js";
import runGameLogic from "../gameLogic.js";

const DESCRIPTION = 'Find the greatest common divisor of given numbers.'

const calculateNod = (firstNum, secondNum) => {
  let result = firstNum % secondNum
  return result === 0 ? secondNum : calculateNod(secondNum, result) 
}

const getNod = (firstNum, secondNum) => {
  [firstNum, secondNum] = [firstNum, secondNum].sort((a, b) => b - a)
  return calculateNod(firstNum, secondNum)
}

const generateRound = () => {
  const firstNum = genRandomNumber(100)
  const secondNum = genRandomNumber(100)
  const correctAnswer = getNod(firstNum, secondNum)
  return [`${firstNum} ${secondNum}`, correctAnswer]
}

export default () => {
  runGameLogic(DESCRIPTION, generateRound)
}
