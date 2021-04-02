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
    1: () => Math.floor(Math.random() * 101), // % 2 === 0 ? "yes" : "no",
    2: () => Math.floor(Math.random() * 101), // % 2 === 0 ? "yes" : "no",
    3: () => Math.floor(Math.random() * 101), // % 2 === 0 ? "yes" : "no",
  };
  const values = Object.values(object);
  values.forEach((key) => {
    const number = key();
    console.log(`Question: ${number}`);
    const result = readlineSync.question('Your answer: ');
    const curret = number % 2 === 0 ? 'yes' : 'no';
    if (curret === result) {
      return console.log('Correct!');
    }
    return console.log(`'yes' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${names}!`);
  });
  console.log(`Congratulations, ${names}!`);
};
