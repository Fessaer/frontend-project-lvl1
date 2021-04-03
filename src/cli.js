import readlineSync from 'readline-sync';

let names = '';

export const actionWell = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  names = name;
};

const evenValue = {
  1: () => Math.floor(Math.random() * 101),
  2: () => Math.floor(Math.random() * 101),
  3: () => Math.floor(Math.random() * 101),
};
const resultEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
const text = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
export const engineProcessing = (
  data = evenValue,
  func = resultEven,
  setText = text,
  params = false,
  transforString = true,
) => {
  setText();
  let i = 0;
  const values = Object.values(data);
  while (i < values.length) {
    const number = values[i];
    console.log(`Question: ${number()}`);
    const result = readlineSync.question('Your answer: ');
    const curret = func(number(params));
    i += 1;
    const functToStr = (flag, dataStr) => (flag === true ? dataStr : Number(dataStr));
    if (functToStr(transforString, result) === functToStr(transforString, curret)) {
      console.log('Correct!');
    } else {
      return console.log(`'${result}' is wrong answer ;(. Correct answer was '${curret}'. Let's try again, ${names}!`);
    }
  }
  return console.log(`Congratulations, ${names}!`);
};
