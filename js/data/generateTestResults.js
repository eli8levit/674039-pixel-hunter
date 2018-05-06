import {Answers} from './config';

function generateResults() {
  const results = {
    correctAverageAnswers: [],
    correctFastAnswers: [],
    correctSlowAnswers: [],
    wrongAverageAnswers: [],
    wrongFastAnswers: [],
    wrongSlowAnswers: []
  };

  for (let i = 1; i < Answers.ANSWERS_AMOUNT + 1; i++) {
    const fast = Math.floor(Math.random() * Answers.ANSWERS_AMOUNT);
    const average = Math.floor(Math.random() * Answers.ANSWERS_AMOUNT) + Answers.ANSWERS_AMOUNT;
    const slow = Math.floor(Math.random() * 11) + 30;

    results.correctAverageAnswers.push({
      correct: true,
      time: average
    });
    results.correctFastAnswers.push({
      correct: true,
      time: fast
    });
    results.correctSlowAnswers.push({
      correct: true,
      time: slow
    });
    results.wrongAverageAnswers.push({
      correct: i > 5,
      time: average
    });
    results.wrongFastAnswers.push({
      correct: i > 5,
      time: fast
    });
    results.wrongSlowAnswers.push({
      correct: i > 5,
      time: slow
    });
  }
  return results;
}

export default generateResults;
