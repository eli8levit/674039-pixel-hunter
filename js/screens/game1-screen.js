import Game1 from '../views/game1-view';
import HeaderView from '../views/header-view';
import updateView from '../Controller/updateView';
import stateHandler from '../Controller/StateHandler';
import onAnswer from '../Controller/onAnswer';
import backToIntro from '../Controller/backToIntro';

let game1;
let header;

stateHandler.addListener((nextState) => {
  if (nextState.stages[nextState.currentScreen].screen === `game1`) {

    header = new HeaderView(nextState, true);
    game1 = new Game1(nextState);

    header.backClick = backToIntro;

    game1.onAnswer = onAnswer;
    updateView(header, game1);
  }
});

export default game1;
