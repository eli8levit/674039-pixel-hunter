function generateResults() {
  const results = {
    correctAverage: [],
    correctFast: [],
    correctSlow: [],
    wrongAverage: [],
    wrongFast: [],
    wrongSlow: []
  };

  for (let i = 1; i < 11; i++) {
    const fast = Math.floor(Math.random() * 10);
    const average = Math.floor(Math.random() * 10) + 10;
    const slow = Math.floor(Math.random() * 11) + 30;

    results.correctAverage.push({
      correct: true,
      time: average
    });
    results.correctFast.push({
      correct: true,
      time: fast
    });
    results.correctSlow.push({
      correct: true,
      time: slow
    });
    results.wrongAverage.push({
      correct: i > 5 ? true : false,
      time: average
    });
    results.wrongFast.push({
      correct: i > 5 ? true : false,
      time: fast
    });
    results.wrongSlow.push({
      correct: i > 5 ? true : false,
      time: slow
    });
  }
  return results;
}

export default generateResults;
