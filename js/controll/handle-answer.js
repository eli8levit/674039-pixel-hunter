import StateHandler from './state-handler';
import changeScreen from './change-screen';
import {QuestionTypes} from '../data/config';
import Timer from '../util/timer';

const CLEAR_ANSWERS = `clear`;

export default function handleAnswer(e, elements, limit, state) {
  (() => {

    let element = e.target.parentNode;
    let identificator = e.target.name;

    if (state.stages[state.currentScreen].screen === QuestionTypes.ONE_OF_THREE) {
      element = e.target;
      identificator = e.target.id;
    }

    if (identificator) {

      existCheck(e.target.name);

      if (e.target.tagName !== `SPAN` || e.target.id) {

        const answer = elements.indexOf(element);
        const match = state.stages[state.currentScreen].content.answers.includes(answer);
        const resArr = resultCount(match);

        if (resArr.length === limit) {

          const finalRes = {
            correct: !resArr.includes(false),
            time: state.time - Timer.time,
          };
          const nextState = Object.assign({}, state);

          if (!finalRes.correct) {
            let lives = nextState.lives;
            lives--;
            nextState.lives = lives;
          }

          existCheck(CLEAR_ANSWERS);
          resultCount(CLEAR_ANSWERS);
          nextState[`results`].push(finalRes);

          StateHandler.state = nextState;

          Timer.stop();
          changeScreen();
        }
        return;
      }
    }
  })();
}

const resultCount = (function () {
  let results = [];
  return (answer) => {
    if (answer === CLEAR_ANSWERS) {
      results = [];
      return results;
    } else if (answer) {
      results.push(true);
    } else {
      results.push(false);
    }
    return results;
  };
}());

const existCheck = (function () {
  const elArr = new Set();
  return (el) => {
    if (el === CLEAR_ANSWERS) {
      return elArr.clear();
    } else if (elArr.has(el)) {
      return resultCount(CLEAR_ANSWERS);
    }
    return elArr.add(el);
  };
})();
