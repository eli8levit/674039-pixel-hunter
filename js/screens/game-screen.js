import Game from '../views/game-view';
import HeaderView from '../views/header-view';
import updateView from '../controller/update-view';
import handleAnswer from '../controller/handle-answer';
import returnToIntro from '../controller/return-to-intro';
import Timer from '../utils/timer';
import StateHandler from '../controller/state-handler';
import initialState from '../data/initial-state';
import changeScreen from '../controller/change-screen';

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
