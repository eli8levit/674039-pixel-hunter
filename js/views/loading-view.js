import AbstractView from './AbstractView';

export default class LoadingView extends AbstractView {
  constructor() {
    super();
  }

  get template() {
    return `<div class="spinner">
              <div class="bounce1"></div>
              <div class="bounce2"></div>
              <div class="bounce3"></div>
            </div>`;
  }
}
