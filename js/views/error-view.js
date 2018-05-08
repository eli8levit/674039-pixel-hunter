import AbstractView from './abstract-view';

export default class ErrorView extends AbstractView {
  constructor(err) {
    super();
    this.error = err;
  }

  get template() {
    return `<div id="error" class="error">
              <p class="error__text">Завтрак не удался :(</p>
              <p class="error__message">${this.error.message}</p>
            </div>`;
  }
}
