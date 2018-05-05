import initialState from '../data/initialState';
import Application from '../screens/Application';
import Screens from '../data/screenTypes';

class StateHandler {
  constructor() {
    this._state = initialState;
  }

  set state(newState) {
    this._state = newState;
  }

  get state() {
    return this._state;
  }

  set nameInput(nameInput) {
    this._state.nameInput = nameInput;
  }

  set time(time) {
    this._state.time = time;
  }

  set screen(screen) {
    this._state.currentScreen = screen;
    this.processScreen(screen);
  }

  processScreen(screen) {
    let view = screen;
    const {GAME} = Screens;

    if (screen.search(GAME) > -1) {
      view = GAME;
    }

    switch (view) {
      case Screens.INTRO: Application.showIntro(); break;

      case Screens.GREETING: Application.showGreeting(); break;

      case Screens.RULES: Application.showRules(); break;

      case GAME: Application.showGame(); break;

      case Screens.STATS: Application.showStats(); break;

      default: Application.showIntro();
    }
  }
}

export default new StateHandler();
