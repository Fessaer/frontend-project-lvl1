const randomNum = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
let correctNumb = 0;

const generateArr = () => {
  const length = randomNum(5, 10);
  const index = randomNum(1, 10);
  const randomNumber = randomNum(1, 50);
  const result = [randomNumber];
  for (let i = 0; i < length; i += 1) {
    result.push(result[result.length - 1] + index);
  }
  const number = randomNum(0, result.length);
  for (let i = 0; i < result.length; i += 1) {
    if (i === number) {
      correctNumb = result[i];
      result[i] = '..';
    }
  }
  return result.join(' ');
};

export const progressionValue = {
  1: (data = false) => {
    if (data === true) {
      return correctNumb;
    }
    return generateArr();
  },
  2: (data = false) => {
    if (data === true) {
      return correctNumb;
    }
    return generateArr();
  },
  3: (data = false) => {
    if (data === true) {
      return correctNumb;
    }
    return generateArr();
  },
};
export const resultProgression = (number) => (number);
export const textProgression = () => console.log('What number is missing in the progression?');
