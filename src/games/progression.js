import { genRandomNumber, genRandomNumberInRange } from '../utils.js'
import runGameLogic from '../gameLogic.js'

const DESCRIPTION = 'What number is missing in the progression?'

const generateProgression = (start, index, step, length) => {
  const progression = [start]
  for (let i = 0; i < length - 1; i++) {
    start = start + index * step
    progression.push(start)
  }
  return progression
}

const generateQuestion = (progression) => {
  const length = progression.length
  const hiddenNumberIndex = genRandomNumberInRange(0, length)
  const correctAnswer = progression[hiddenNumberIndex]
  const resultProgression = [...progression]
  resultProgression[hiddenNumberIndex] = '..'
  return [resultProgression, correctAnswer]
}

const generateRound = () => {
  const start = genRandomNumber(100)
  const index = genRandomNumberInRange(2, 10)
  const step = genRandomNumberInRange(2, 10)
  const length = genRandomNumberInRange(5, 15)
  const initialProgression = generateProgression(start, index, step, length)
  const question = generateQuestion(initialProgression)
  const progression = question[0]
  const correctAnswer = question[1]
  return [`${progression.join(' ')} `, correctAnswer]
}

export default () => {
  runGameLogic(DESCRIPTION, generateRound)
}
