import {Answers} from '../data/config';

const getFooter = (results) => `<div class="stats">
                              <ul class="stats">
                                ${createFooter(results)}
                              </ul>
                            </div>`;

const createFooter = (results) => {
  let str = ``;

  results.forEach((res) => {
    let status = ``;
    if (res.correct) {
      if (res.time < Answers.FAST) {
        status = `fast`;
      } else if (res.time > Answers.SLOW) {
        status = `slow`;
      } else {
        status = `correct`;
      }
    } else {
      status = `wrong`;
    }
    str += `<li class="stats__result stats__result--${status}"></li>`;
  });

  for (let i = results.length; i < Answers.ANSWERS_AMOUNT; i++) {
    str += `<li class="stats__result stats__result--unknown">`;
  }
  return str;
};

export default getFooter;
