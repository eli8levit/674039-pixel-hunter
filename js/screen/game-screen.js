import Game from '../views/game-view';
import HeaderView from '../views/header-view';
import updateView from '../controll/update-view';
import handleAnswer from '../controll/handle-answer';
import returnToIntro from '../controll/return-to-intro';
import Timer from '../util/timer';
import StateHandler from '../controll/state-handler';
import initialState from '../data/initial-state';
import changeScreen from '../controll/change-screen';

const LAST_TIME = 5;

export default class GameScreen {
  constructor(state) {
    this.state = state;
  }

  init() {
    Timer.start();
    this.header = new HeaderView(this.state, true);
    this.view = new Game(this.state);

    this.header.onButtonBackClick = () => {
      // eslint-disable-next-line no-alert
      if (window.confirm(`Вы в этом уверены? Текущая игра будет утеряна навечно! Я бы подумал дважды...`)) {
        returnToIntro();
      }
      return;
    };

    this.view.onAnswer = handleAnswer;

    updateView(this.header, this.view);

    Timer.addListener((time) => {
      this._onTimer(time);

      if (time === LAST_TIME) {
        this.header.onBlink();
      } else if (time === 0) {
        const nextState = Object.assign({}, StateHandler.state);
        nextState.lives--;
        nextState.results.push({
          correct: false,
          time: initialState.time
        });
        StateHandler.state = nextState;
        Timer.stop();
        changeScreen();
      }
    });
  }

  _onTimer(time) {
    this.header.changeTime(time);
  }
}
