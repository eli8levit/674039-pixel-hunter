import StatsView from '../views/stats-view';
import HeaderView from '../views/header-view';
import updateView from '../Controller/updateView';
import backToIntro from '../Controller/backToIntro';
import Loader from '../Controller/Loader';
import timer from '../utils/Timer';

export default class Stats {
  constructor(state) {
    this.state = state;
  }

  init() {
    timer.stop();
    Loader.showLoading();

    const data = {
      results: this.state.results,
      lives: this.state.lives,
    };

    const name = this.state.nameInput;

    Loader.uploadData(data, name, () => {

      Loader.getResults(name, (answers) => {

        this.header = new HeaderView();
        this.view = new StatsView(answers);

        this.header.backClick = backToIntro;

        updateView(this.header, this.view);
      });
    });


  }
}
