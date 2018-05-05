import AbstractView from './AbstractView';

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  nextClick() {

  }

  bind() {
    const buttons = this.element.getElementsByClassName(`intro__asterisk`);
    buttons[0].addEventListener(`click`, this.nextClick, false);
  }

  get template() {
    return `<div id="intro" class="intro">
              <h1 class="intro__asterisk">*</h1>
              <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
            </div>`;
  }
}
