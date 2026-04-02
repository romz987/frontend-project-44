import askQuestion from './cli.js'

const runGameLogic = (description, generateRound, roundsCount = 3) => {
  // Greeting
  console.log('Welcome to the Brain Games!')
  const userName = askQuestion('May I have your name?')
  console.log(`Hello, ${userName}`)
  console.log(description)

  // Logic
  while (roundsCount > 0) {
    // Generate question
    const roundData = generateRound()
    const question = roundData[0]
    const correctAnswer = roundData[1]

    // Ask question
    const userAnswer = askQuestion(`Question: ${question}\nYour answer:`)

    // Check result
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`)
      console.log(`Let's try again, ${userName}!`)
      break
    }
    console.log('Correct!')

    // Rounds counter
    roundsCount -= 1
  }

  // Check result
  if (roundsCount === 0) {
    console.log(`Congratulations, ${userName}!`)
  }
}

export default runGameLogic
