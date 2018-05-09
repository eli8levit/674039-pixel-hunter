import {Answers} from './config';
import initialState from './initial-state';

function generateResults() {
  const results = {
    correctAverageAnswers: [],
    correctFastAnswers: [],
    correctSlowAnswers: [],
    wrongAverageAnswers: [],
    wrongFastAnswers: [],
    wrongSlowAnswers: []
  };

  for (let i = 0; i < Answers.ANSWERS_AMOUNT; i++) {
    const fast = Math.floor(Math.random() * Answers.ANSWERS_AMOUNT);
    const average = Math.floor(Math.random() * Answers.ANSWERS_AMOUNT) + Answers.ANSWERS_AMOUNT;
    const slow = Math.floor(Math.random() * Answers.ANSWERS_AMOUNT) + initialState.time;

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
      correct: i > 4,
      time: average
    });
    results.wrongFastAnswers.push({
      correct: i > 4,
      time: fast
    });
    results.wrongSlowAnswers.push({
      correct: i > 4,
      time: slow
    });
  }
  return results;
}

export default generateResults;
