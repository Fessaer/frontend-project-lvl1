const num1 = Math.floor(Math.random() * 101);
const num2 = Math.floor(Math.random() * 101);
const num3 = Math.floor(Math.random() * 101);
const num4 = Math.floor(Math.random() * 101);
const num5 = Math.floor(Math.random() * 101);
const num6 = Math.floor(Math.random() * 101);
export const calcValue = {
  1: (data = false) => {
    if (data === true) {
      return num1 + num2;
    }
    return `${num1} + ${num2}`;
  },
  2: (data = false) => {
    if (data === true) {
      return num3 - num4;
    }
    return `${num3} - ${num4}`;
  },
  3: (data = false) => {
    if (data === true) {
      return num5 * num6;
    }
    return `${num5} * ${num6}`;
  },
};
export const resultCalc = (number) => (number);
export const textCalc = () => console.log('What is the result of the expression?');
