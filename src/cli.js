import readlineSync from 'readline-sync';

let names = '';

export const actionWell = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  names = name;
};

export const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const object = {
    1: () => Math.floor(Math.random() * 101),
    2: () => Math.floor(Math.random() * 101),
    3: () => Math.floor(Math.random() * 101),
  };
  let i = 0;
  const values = Object.values(object);
  console.log(values);
  while (i < values.length) {
    const number = values[i]();
    console.log(`Question: ${number}`);
    const result = readlineSync.question('Your answer: ');
    const curret = number % 2 === 0 ? 'yes' : 'no';
    i += 1;
    if (curret === result) {
      console.log('Correct!');
    } else {
      return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${names}!`);
    }
  }
  return console.log(`Congratulations, ${names}!`);
};
