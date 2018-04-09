function pointCounter(answers, lifes) {
  if (!answers) {
    throw new TypeError(`no answers provided`);
  } else if (!lifes && lifes !== 0) {
    throw new TypeError(`no lifes provided`);
  } else if (answers.length < 10) {
    return -1;
  }

  let points = 0;

  answers.forEach((answer) => {
    let singlePoints = 0;
    if (answer.correct) {
      switch (true) {
        case answer.time < 10: singlePoints = 150; break;
        case answer.time > 20: singlePoints = 50; break;
        default: singlePoints = 100; break;
      }
    }
    points += singlePoints;
  });

  points += lifes * 50;

  return points;
}
export default pointCounter;
