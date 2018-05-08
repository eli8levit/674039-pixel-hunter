import AbstractView from './abstract-view';
import initialState from '../data/initial-state';

export default class HeaderView extends AbstractView {
  constructor(state, game = false) {
    super();
    this.game = game;
    this.state = state;
  }

  onBlink() {
    const timer = document.querySelector(`.game__timer`);
    timer.className += ` blink`;
  }

  changeTime(time) {
    this.timer.textContent = time;
  }

  onButtonBackClick() {

  }

  bind() {
    const backButton = this.element.querySelector(`.back`);
    backButton.addEventListener(`click`, this.onButtonBackClick, false);

    this.timer = this.element.querySelector(`.game__timer`);
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
                  ${new Array(initialState.lives - this.state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
                  ${new Array(this.state.lives - 1).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
                </div>` : ``}
              </header>
            </div>`;
  }
}
