import initialState from '../data/initialState';
import Application from '../screens/Application';

class StateHandler {
  constructor() {
    this._state = initialState;
    this.listeners = new Set();
  }

  addListener(listener) {
    this.listeners.add(listener);
  }

  set state(newState) {
    this._state = newState;
    this.onStateChange();
  }

  get state() {
    return this._state;
  }

  set nameInput(nameInput) {
    this._state.nameInput = nameInput;
    this.onStateChange();
  }

  get nameInput() {
    return this.state.nameInput;
  }

  set time(time) {
    this._state.time = time;
    this.onStateChange();
  }

  get time() {
    return this._state.time;
  }

  set game(game) {
    this._state.game = game;
  }

  set screen(screen) {
    if (screen === this._state.endScreen) {
      this._state.game = false;
    }
    this._state.currentScreen = screen;
    this.processScreen(screen);
    this.onStateChange();
  }

  processScreen(screen) {
    let view = screen;

    if (this._state.game) {
      view = `game`;
    }
    switch (view) {
      case `intro`: Application.showIntro(); break;

      case `greeting`: Application.showGreeting(); break;

      case `rules`: Application.showRules(); break;

      case `game`: Application.showGame(); break;

      case `stats`: Application.showStats(); break;

      default: Application.showIntro();
    }
  }

  onStateChange() {
    for (let listener of this.listeners) {
      listener(this._state);
    }
  }
}

const stateHandler = new StateHandler();

export default stateHandler;
