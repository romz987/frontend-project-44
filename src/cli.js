import readlineSync from 'readline-sync'

export const askQuestion = (question) => {
  return readlineSync.question(`${question} `)
}
