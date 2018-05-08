import initialState from '../data/initial-state';
import Application from '../screens/application';
import {ScreenTypes} from '../data/config';

class StateHandler {
  constructor() {
    this._state = initialState;
  }

  get state() {
    return this._state;
  }

  set state(newState) {
    this._state = newState;
  }

  set nameInput(nameInput) {
    this._state.nameInput = nameInput;
  }

  set screen(screen) {
    this._state.currentScreen = screen;
    this._processScreen(screen);
  }

  _processScreen(screen) {
    let view = screen;
    const {GAME} = ScreenTypes;

    if (screen.search(GAME) > -1) {
      view = GAME;
    }

    switch (view) {
      case ScreenTypes.INTRO: Application.showIntro(); break;

      case ScreenTypes.GREETING: Application.showGreeting(); break;

      case ScreenTypes.RULES: Application.showRules(); break;

      case GAME: Application.showGame(); break;

      case ScreenTypes.STATS: Application.showStats(); break;

      default: Application.showIntro();
    }
  }
}

export default new StateHandler();
