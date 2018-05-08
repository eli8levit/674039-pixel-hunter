import {Answers} from '../data/config';

export default function bonusCount(answers) {
  const statistic = {
    correct: 0,
    wrong: 0,
    fast: 0,
    slow: 0
  };
  answers.forEach((answer) => {
    if (answer.correct) {
      statistic.correct += 1;
      if (answer.time < Answers.FAST) {
        statistic.fast += 1;
      } else if (answer.time > Answers.SLOW) {
        statistic.slow += 1;
      }
    } else {
      statistic.wrong += 1;
    }
  });
  return statistic;
}
