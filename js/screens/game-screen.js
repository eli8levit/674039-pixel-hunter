import Game from '../views/game-view';
import HeaderView from '../views/header-view';
import updateView from '../Controller/updateView';
import onAnswer from '../Controller/onAnswer';
import backToIntro from '../Controller/backToIntro';
import timer from '../utils/timer';
import stateHandler from '../Controller/StateHandler';
import initialState from '../data/initialState';
import nextScreen from '../Controller/nextScreen';

const LAST_TIME = 5;

export default class GameScreen {
  constructor(state) {
    this.state = state;
  }

  init() {
    timer.start();
    this.header = new HeaderView(this.state, true);
    this.view = new Game(this.state);

    this.header.onButtonBackClick = () => {
      if (window.confirm(`Вы в этом уверены? Текущая игра будет утеряна навечно! Я бы подумал дважды...`)) {
        backToIntro();
      }
      return;
    };

    this.view.onAnswer = onAnswer;

    updateView(this.header, this.view);

    timer.addListener((time) => {
      this._onTimer(time);

      if (time === LAST_TIME) {
        this.header.onBlink();
      } else if (time === 0) {
        const nextState = Object.assign({}, stateHandler.state);
        nextState.results.push({
          correct: false,
          time: initialState.time
        });
        stateHandler.state = nextState;
        timer.stop();
        nextScreen();
      }
    });
  }

  _onTimer(time) {
    this.header.changeTime(time);
  }
}
