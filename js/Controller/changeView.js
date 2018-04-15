import createElement from './createElement';

const container = document.querySelector(`#main`);

function changeView(state, stages) {

  container.innerHTML = ``;
  const stage = stages[state.currentScreen];
  container.appendChild(createElement(stage.screen(state, stages)));

  const nextRender = (screen) => {
    const nextState = Object.assign({}, state, {currentScreen: screen});
    const nextStages = Object.assign({}, stages);

    if (nextStages[screen].value) {
      nextStages[screen].value = ``;
    } else if (nextState.currentScreen === `intro`) {
      nextStages.results = [];
      nextState.lifes = 3;
    }
    changeView(nextState, nextStages);
  };

  const back = document.getElementsByClassName(`back`);

  if (state.lifes === 0 && state.currentScreen !== `stats`) {
    nextRender(`stats`);
  }

  if (back.length) {
    back[0].addEventListener(`click`, () => nextRender(`intro`), false);
  }

  if (stage.next.class) {
    const next = document.getElementsByClassName(stage.next.class);
    next[0].addEventListener(`click`, () => nextRender(stage.next.screen), false);
  }

  if (stage.events) {
    stage.events.forEach((event) => {
      const elements = document.getElementsByClassName(event.class);
      const elementsArr = Array.prototype.slice.call(elements);

      elementsArr.forEach((el) => {
        if (event.type === `input`) {
          el.addEventListener(event.type, (input) => event.func(state, stages, changeView, input), false);
        } else {
          el.addEventListener(event.type, (e) => event.func(e, elementsArr, state, stages, changeView), false);
        }
      });
    });
  }
}

export default changeView;
