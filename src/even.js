const num1 = Math.floor(Math.random() * 101);
const num2 = Math.floor(Math.random() * 101);
const num3 = Math.floor(Math.random() * 101);

const even = (n) => (!(n % 2) ? 'yes' : 'no');
export const evenValue = {
  1: (data = false) => {
    if (data === true) {
      return even(num1);
    }
    return num1;
  },
  2: (data = false) => {
    if (data === true) {
      return even(num2);
    }
    return num2;
  },
  3: (data = false) => {
    if (data === true) {
      return even(num3);
    }
    return num3;
  },
};
export const resultEven = (number) => (number);
export const text = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
