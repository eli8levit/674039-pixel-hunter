export const createElement = (template) => {
  const container = document.createElement(`div`);
  container.innerHTML = template;
  return container;
};

export default class AbstractView {
  constructor() {
    if (new.target === AbstractView) {
      throw new Error(`not allowed to initialize abstract view`);
    }
  }

  get template() {
    throw new Error(`template is required`);
  }

  get element() {
    if (this._el) {
      return this._el;
    }
    this._el = this.render();
    this.bind(this._el);
    return this._el;
  }

  bind() {
    // bind listeners
  }

  render() {
    return createElement(this.template);
  }
}
