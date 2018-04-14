export default function handleAnswer(e, elements, state, stages, cb) {
  (() => {

    const check = existCheck(e.target.name);
    if (e.target.tagName !== `SPAN` && check || e.target.id) {

      const element = state.currentScreen === `game5` || state.currentScreen === `game6` ? e.target : e.target.parentNode;
      const answer = elements.indexOf(element);
      const match = stages[state.currentScreen].content.answers.includes(answer);
      const resArr = resultCount(match);

      let limit = 2;
      if (state.currentScreen === `game3` || state.currentScreen === `game5` || state.currentScreen === `game6`) {
        limit = 1;
      }

      if (resArr.length === limit) {
        const nextStages = Object.assign({}, stages);
        const finalRes = {
          correct: !resArr.includes(false),
          time: 15,
        };
        const nextState = Object.assign(state, {});
        if (!finalRes.correct) {
          let lifes = nextState.lifes;
          lifes--;
          nextState.lifes = lifes;
        }
        nextState.currentScreen = stages[state.currentScreen].next.screen;
        existCheck(`CLEAR`);
        resultCount(`CLEAR`);
        nextStages[`results`].push(finalRes);
        cb(nextState, nextStages);
      }
      return;
    }
  })();
}

const resultCount = (function () {
  let result = [];
  return (answer) => {
    if (answer === `CLEAR`) {
      result = [];
      return result;
    } else if (answer) {
      result.push(true);
    } else {
      result.push(false);
    }
    return result;
  };
}());

const existCheck = (function () {
  const elArr = new Set();
  let size = elArr.size;
  return (el) => {
    if (el === `CLEAR`) {
      return elArr.clear();
    } else {
      elArr.add(el);
      if (elArr.size !== size) {
        size = elArr.size;
        return true;
      } else {
        return false;
      }
    }
  };
})();
