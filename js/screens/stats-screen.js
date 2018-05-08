import StatsView from '../views/stats-view';
import HeaderView from '../views/header-view';
import updateView from '../controller/update-view';
import returnToIntro from '../controller/return-to-intro';
import Loader from '../controller/loader';
import Timer from '../utils/timer';

export default class Stats {
  constructor(state) {
    this.state = state;
  }

  init() {
    Timer.stop();
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

        this.header.onButtonBackClick = returnToIntro;

        updateView(this.header, this.view);
      });
    });
  }
}
