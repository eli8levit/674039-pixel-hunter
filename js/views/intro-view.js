import AbstractView from './abstract-view';

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  nextClick() {

  }

  bind() {
    const nextButton = this.element.querySelector(`.intro__asterisk`);
    nextButton.addEventListener(`click`, this.nextClick, false);
  }

  get template() {
    return `<div id="intro" class="intro">
              <h1 class="intro__asterisk">*</h1>
              <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
            </div>`;
  }
}
