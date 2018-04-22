import AbstractView from './AbstractView';

export default class HeaderView extends AbstractView {
  constructor(state, game = false) {
    super();
    this.game = game;
    this.state = state;
  }

  backClick() {

  }

  bind() {
    const back = this.element.getElementsByClassName(`back`);
    back[0].addEventListener(`click`, this.backClick, false);
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
                  ${new Array(3 - this.state.lifes).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
                  ${new Array(this.state.lifes).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
                </div>` : ``}
              </header>
            </div>`;
  }
}
