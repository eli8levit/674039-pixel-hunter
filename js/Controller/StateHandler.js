import initialState from '../data/initialState';

class StateHandler {
  constructor() {
    this._state = initialState;
    this.listeners = new Set();
  }

  addListener(listener) {
    this.listeners.add(listener);
  }

  removeListener(listener) {
    this.listeners.delete(listener);
  }

  set state(newState) {
    this._state = newState;
    this.onStateChange();
  }

  get state() {
    return this._state;
  }

  onStateChange() {
    for (let listener of this.listeners) {
      listener(this._state);
    }
  }
}

const stateHandler = new StateHandler();

export default stateHandler;
