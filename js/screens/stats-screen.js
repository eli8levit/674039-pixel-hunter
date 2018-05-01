import StatsView from '../views/stats-view';
import HeaderView from '../views/header-view';
import updateView from '../Controller/updateView';
import backToIntro from '../Controller/backToIntro';
import timer from '../utils/Timer';

export default class Stats {
  constructor(state) {
    this.state = state;
  }

  init() {
    timer.stop();
    this.header = new HeaderView();
    this.view = new StatsView(this.state);

    this.header.backClick = backToIntro;

    updateView(this.header, this.view);
  }
}
