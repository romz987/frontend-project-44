#!/usr/bin/env node
import { askQuestion } from '../src/cli.js'

const genRandomNumber = (max) => {
  return Math.floor(Math.random() * max)
}

const checkParity = (num) => {
  return num % 2 === 0 ? true : false
}

const checkAnswerValidity = (userAnswer) => {
  const validAnswers = ['yes', 'no']
  return validAnswers.includes(userAnswer) ? true : false
}

const startBrainEvenGame = () => {
  // Greeting
  console.log('Welcome to the Brain Games!')
  const userName = askQuestion(`May I have your name?`)
  console.log(
    `Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no"`,
  )

  // Game
  let correctAnswersCounter = 0
  for (let i = 0; i < 3; i++) {
    // start
    let currentNumber = genRandomNumber(10)
    console.log(`Question: ${currentNumber}`)
    let userAnswer = askQuestion('Your answer:').toLowerCase()

    // check validity
    if (!checkAnswerValidity(userAnswer)) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer should be 'yes' or 'no'.\nLet's try again, ${userName}`,
      )
      break
    }

    // get bools
    let parityBool = checkParity(currentNumber)
    let userAnswerBool
    userAnswer === 'yes' ? (userAnswerBool = true) : (userAnswerBool = false)

    // check
    if (userAnswerBool === parityBool) {
      console.log('Correct!')
      correctAnswersCounter += 1
    }
    else {
      userAnswerBool < parityBool
        ? console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'.')
        : console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'.')
      console.log(`Let's try again, ${userName}!`)
      break
    }
  }

  // Result
  if (correctAnswersCounter === 3) {
    console.log(`Congratulations, ${userName}!`)
  }
}

startBrainEvenGame()
