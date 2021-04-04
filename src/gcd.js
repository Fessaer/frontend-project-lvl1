const num1 = Math.floor(Math.random() * 101);
const num2 = Math.floor(Math.random() * 101);
const num3 = Math.floor(Math.random() * 101);
const num4 = Math.floor(Math.random() * 101);
const num5 = Math.floor(Math.random() * 101);
const num6 = Math.floor(Math.random() * 101);
const nod = (x, y) => {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
};
export const gcdValue = {
  1: (data = false) => {
    if (data === true) {
      return nod(num1, num2);
    }
    return `${num1} ${num2}`;
  },
  2: (data = false) => {
    if (data === true) {
      return nod(num3, num4);
    }
    return `${num3} ${num4}`;
  },
  3: (data = false) => {
    if (data === true) {
      return nod(num5, num6);
    }
    return `${num5} ${num6}`;
  },
};
export const resultGcd = (number) => (number);
export const textGcd = () => console.log('Find the greatest common divisor of given numbers.');
