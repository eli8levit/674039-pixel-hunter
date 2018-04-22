import StatsView from '../views/stats-view';
import HeaderView from '../views/header-view';
import updateView from '../Controller/updateView';
import stateHandler from '../Controller/StateHandler';
import backToIntro from '../Controller/backToIntro';

let stats;
let header = new HeaderView();

header.backClick = backToIntro;

stateHandler.addListener((nextState) => {
  if (nextState.currentScreen === `stats`) {
    stats = new StatsView(nextState);
    updateView(header, stats);
  }
});

export default stats;
