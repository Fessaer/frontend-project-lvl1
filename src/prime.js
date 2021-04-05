const isPrime = (n) => {
  if (n < 2) {
    return 'no';
  } if (n === 2) {
    return 'yes';
  }
  let i = 2;
  const limit = Math.sqrt(n);
  while (i <= limit) {
    if (n % i === 0) {
      return 'no';
    }
    i += 1;
  }
  return 'yes';
};

const num1 = Math.floor(Math.random() * 101);
const num2 = Math.floor(Math.random() * 101);
const num3 = Math.floor(Math.random() * 101);

export const primeValue = {
  1: (data = false) => {
    if (data === true) {
      return isPrime(num1);
    }
    return num1;
  },
  2: (data = false) => {
    if (data === true) {
      return isPrime(num2);
    }
    return num2;
  },
  3: (data = false) => {
    if (data === true) {
      return isPrime(num3);
    }
    return num3;
  },
};
export const resultPrime = (number) => (number);
export const textPrime = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
