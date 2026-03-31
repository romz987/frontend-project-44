export const genRandomNumber = (max) => {
  return Math.floor(Math.random() * max)
}

export const genRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
