import { genRandomNumber } from "../utils.js";
import runGameLogic from "../gameLogic.js";

const DESCRIPTION =
  'Answer "yes" if the number is even, otherwise answer "no".';

const checkParity = (num) => num % 2 === 0;

const generateRound = () => {
  const num = genRandomNumber(100);
  const correctAnswer = checkParity(num) ? "yes" : "no";
  return [`${num}`, correctAnswer];
};

const start = () => {
  runGameLogic(DESCRIPTION, generateRound)
}

export default start
