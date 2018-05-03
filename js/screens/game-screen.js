import Game from '../views/game-view';
import HeaderView from '../views/header-view';
import updateView from '../Controller/updateView';
import onAnswer from '../Controller/onAnswer';
import backToIntro from '../Controller/backToIntro';
import timer from '../utils/Timer';
import stateHandler from '../Controller/StateHandler';

export default class GameScreen {
  constructor(state) {
    this.state = state;
  }

  onTimer(time) {
    this.header.changeTime(time);
  }

  init() {
    this.header = new HeaderView(this.state, true);
    this.view = new Game(this.state);

    this.header.backClick = () => {
      backToIntro();
    };

    this.view.onAnswer = onAnswer;

    updateView(this.header, this.view);

    timer.addListener((time) => {
      stateHandler.time = time;
      this.onTimer(time);
    });
  }
}
