import {Answers, Points} from '../data/config';

function pointCount(answers, lives) {
  if (!answers) {
    throw new TypeError(`no answers provided`);
  } else if (!lives && lives !== 0) {
    throw new TypeError(`no lives provided`);
  } else if (answers.length < Answers.ANSWERS_AMOUNT) {
    return -1;
  }

  const calcPoints = answers.map((answer) => {
    let singlePoints = 0;
    if (answer.correct) {
      switch (true) {
        case answer.time < Answers.FAST: singlePoints = Points.FAST_ANSWER; break;
        case answer.time > Answers.SLOW: singlePoints = Points.SLOW_ANSWER; break;
        default: singlePoints = Points.RIGHT_ANSWER; break;
      }
    }
    return singlePoints;
  });

  let totalPoints = calcPoints.reduce((a, b) => a + b);

  totalPoints += lives * 50;

  return totalPoints;
}
export default pointCount;
