export const evenValue = {
  1: () => Math.floor(Math.random() * 101),
  2: () => Math.floor(Math.random() * 101),
  3: () => Math.floor(Math.random() * 101),
};
export const resultEven = (number) => (number % 2 === 0 ? 'yes' : 'no');
export const text = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');
