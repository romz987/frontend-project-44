import { genRandomNumber, genRandomNumberInRange } from '../utils.js'
import runGameLogic from '../gameLogic.js'

const DESCRIPTION = 'What number is missing in the progression?'

const generateProgression = (start, step, length) => {
  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }
  return progression
}

const generateQuestion = (progression, hiddenNumberIndex) => {
  const correctAnswer = progression[hiddenNumberIndex]
  const resultProgression = [...progression]
  resultProgression[hiddenNumberIndex] = '..'
  return [resultProgression, correctAnswer]
}

const generateRound = () => {
  const start = genRandomNumber(100)
  const step = genRandomNumberInRange(2, 10)
  const length = genRandomNumberInRange(5, 15)
  const initialProgression = generateProgression(start, step, length)
  // Get hidden number index 
  const hiddenNumberIndex = genRandomNumberInRange(0, length - 1)
  const question = generateQuestion(initialProgression, hiddenNumberIndex)
  const progression = question[0]
  const correctAnswer = question[1]
  return [`${progression.join(' ')}`, correctAnswer.toString()]
}

const start = () => {
  runGameLogic(DESCRIPTION, generateRound)
}

export default start
