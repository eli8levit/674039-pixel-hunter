import AbstractView from './abstract-view';
import initialState from '../data/initial-state';
import {Answers} from '../data/config';

export default class RulesView extends AbstractView {
  constructor() {
    super();
    this.name = ``;
  }

  get template() {
    return `<div class="rules" id="rules">
              <h1 class="rules__title">Правила</h1>
              <p class="rules__description">Угадай ${Answers.ANSWERS_AMOUNT} раз для каждого изображения фото <img
                src="img/photo_icon.png" width="16" height="16"> или рисунок <img
                src="img/paint_icon.png" width="16" height="16" alt="">.<br>
                Фотографиями или рисунками могут быть оба изображения.<br>
                На каждую попытку отводится ${initialState.time} секунд.<br>
                Ошибиться можно не более ${initialState.lives - 1} раз.<br>
                <br>
                Готовы?
              </p>
              <form class="rules__form">
                <input value="${this.name}" class="rules__input" type="text" placeholder="Ваше Имя">
                <button disabled class="rules__button continue" type="submit" id="rules__button">Go!</button>
              </form>
            </div>`;
  }

  toggleButton(activate) {
    const rulesBtn = document.querySelector(`.rules__button`);
    rulesBtn.disabled = !activate;
  }

  nextClick() {

  }

  onInput() {

  }

  bind() {
    const rulesBtn = this.element.querySelector(`.rules__button`);
    rulesBtn.addEventListener(`click`, this.nextClick, false);

    const input = this.element.querySelector(`.rules__input`);
    input.addEventListener(`input`, this.onInput, false);
  }
}
