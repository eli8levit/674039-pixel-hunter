import RulesView from '../views/rules-view';
import HeaderView from '../views/header-view';
import updateView from '../Controller/updateView';
import stateHandler from '../Controller/StateHandler';
import backToIntro from '../Controller/backToIntro';
import nextScreen from '../Controller/nextScreen';

let rules;
let header;

stateHandler.addListener((nextState) => {
  if (nextState.currentScreen === `rules`) {

    header = new HeaderView();
    rules = new RulesView();

    header.backClick = backToIntro;

    rules.nextClick = () => {
      rules.name = ``;
      nextScreen();
    };

    updateView(header, rules);
  }
});

export default rules;
