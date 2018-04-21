import AbstractView from './AbstractView';

export default class RulesView extends AbstractView {
  constructor() {
    super();
    this.name = ``;
  }

  nextClick() {

  }

  onInput(input) {
    const rulesBtn = document.getElementById(`rules__button`);
    if (input.inputType !== `deleteContentBackward`) {
      rulesBtn.disabled = false;
      this.name += input.data;
    } else {
      this.name = this.name.substring(0, this.name.length - 1);
    }

    if (this.name === ``) {
      rulesBtn.disabled = true;
    }
  }

  bind() {
    const rulesBtn = this.element.getElementsByClassName(`rules__button`);
    rulesBtn[0].addEventListener(`click`, this.nextClick, false);

    const input = this.element.getElementsByClassName(`rules__input`);
    input[0].addEventListener(`input`, this.onInput, false);
  }

  get template() {
    return `<div class="rules" id="rules">
              <h1 class="rules__title">Правила</h1>
              <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
                src="img/photo_icon.png" width="16" height="16"> или рисунок <img
                src="img/paint_icon.png" width="16" height="16" alt="">.<br>
                Фотографиями или рисунками могут быть оба изображения.<br>
                На каждую попытку отводится 30 секунд.<br>
                Ошибиться можно не более 3 раз.<br>
                <br>
                Готовы?
              </p>
              <form class="rules__form">
                <input value="${this.name}" class="rules__input" type="text" placeholder="Ваше Имя">
                <button disabled class="rules__button continue" type="submit" id="rules__button">Go!</button>
              </form>
            </div>`;
  }
}
