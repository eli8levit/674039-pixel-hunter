import stateHandler from './StateHandler';
import nextScreen from './nextScreen';
import QuestionType from '../data/questionType';

const CLEAR_ANSWERS = `clear`;

const convertTime = (time) => {
  const [minutes, seconds] = time.split(`:`);
  return parseInt(minutes, 10) * 60 + parseInt(seconds, 10);
};

export default function handleAnswer(e, elements, limit, state, startTime) {
  (() => {

    let element = e.target.parentNode;
    let identificator = e.target.name;

    if (state.stages[state.currentScreen].screen === QuestionType.ONE_OF_THREE) {
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

          const levelTime = convertTime(state.time) - convertTime(startTime);

          const finalRes = {
            correct: !resArr.includes(false),
            time: levelTime,
          };
          const nextState = Object.assign(state, {});

          if (!finalRes.correct) {
            let lifes = nextState.lifes;
            lifes--;
            nextState.lifes = lifes;
          }

          existCheck(CLEAR_ANSWERS);
          resultCount(CLEAR_ANSWERS);
          nextState[`results`].push(finalRes);

          stateHandler.state = nextState;

          nextScreen();
        }
        return;
      }
    }
  })();
}

const resultCount = (function () {
  let result = [];
  return (answer) => {
    if (answer === CLEAR_ANSWERS) {
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
  return (el) => {
    if (el === CLEAR_ANSWERS) {
      return elArr.clear();
    } else {
      if (elArr.has(el)) {
        return resultCount(CLEAR_ANSWERS);
      } else {
        return elArr.add(el);
      }
    }
  };
})();
