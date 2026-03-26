import readlineSync from 'readline-sync'

export default (question) => {
  return readlineSync.question(`${question} `)
}
