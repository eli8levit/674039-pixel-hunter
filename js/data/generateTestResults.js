function generateResults() {
  const results = {
    correctAverageAnswers: [],
    correctFastAnswers: [],
    correctSlowAnswers: [],
    wrongAverageAnswers: [],
    wrongFastAnswers: [],
    wrongSlowAnswers: []
  };

  for (let i = 1; i < 11; i++) {
    const fast = Math.floor(Math.random() * 10);
    const average = Math.floor(Math.random() * 10) + 10;
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
