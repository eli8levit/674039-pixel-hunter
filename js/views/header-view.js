import AbstractView from './AbstractView';

const MAX_LIVES = 3;

export default class HeaderView extends AbstractView {
  constructor(state, game = false) {
    super();
    this.game = game;
    this.state = state;
  }

  onButtonBackClick() {

  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    backButton.addEventListener(`click`, this.onButtonBackClick, false);

    this.timer = this.element.querySelector(`.game__timer`);
  }

  changeTime(time) {
    this.timer.textContent = time;
  }

  get template() {
    return `<div>
              <header class="header">
                <div class="header__back">
                  <button class="back">
                    <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                    <img src="img/logo_small.svg" width="101" height="44">
                  </button>
                </div>
                ${this.game ? `<h1 class="game__timer">${this.state.time}</h1>
                <div class="game__lives">
                  ${new Array(MAX_LIVES - this.state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
                  ${new Array(this.state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
                </div>` : ``}
              </header>
            </div>`;
  }
}
