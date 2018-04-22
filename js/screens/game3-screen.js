import Game3 from '../views/game3-view';
import HeaderView from '../views/header-view';
import updateView from '../Controller/updateView';
import stateHandler from '../Controller/StateHandler';
import onAnswer from '../Controller/onAnswer';
import backToIntro from '../Controller/backToIntro';

let game3;
let header;

stateHandler.addListener((nextState) => {
  if (nextState.stages[nextState.currentScreen].screen === `game3`) {

    header = new HeaderView(nextState, true);
    game3 = new Game3(nextState);

    header.backClick = backToIntro;

    game3.onAnswer = onAnswer;
    updateView(header, game3);
  }
});

export default game3;
