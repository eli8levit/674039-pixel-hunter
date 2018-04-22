import Game2 from '../views/game2-view';
import HeaderView from '../views/header-view';
import updateView from '../Controller/updateView';
import stateHandler from '../Controller/StateHandler';
import onAnswer from '../Controller/onAnswer';
import backToIntro from '../Controller/backToIntro';

let game2;
let header;

stateHandler.addListener((nextState) => {
  if (nextState.stages[nextState.currentScreen].screen === `game2`) {

    header = new HeaderView(nextState, true);
    game2 = new Game2(nextState);

    header.backClick = backToIntro;

    game2.onAnswer = onAnswer;
    updateView(header, game2);
  }
});

export default game2;
