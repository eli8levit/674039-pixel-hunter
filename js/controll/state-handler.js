import initialState from '../data/initial-state';
import application from '../screen/application';
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
      case ScreenTypes.INTRO: application.showIntro(); break;

      case ScreenTypes.GREETING: application.showGreeting(); break;

      case ScreenTypes.RULES: application.showRules(); break;

      case GAME: application.showGame(); break;

      case ScreenTypes.STATS: application.showStats(); break;

      default: application.showIntro();
    }
  }
}

export default new StateHandler();
