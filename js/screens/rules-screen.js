import RulesView from '../views/rules-view';
import HeaderView from '../views/header-view';
import stateHandler from '../Controller/StateHandler';
import backToIntro from '../Controller/backToIntro';
import nextScreen from '../Controller/nextScreen';
import updateView from '../Controller/updateView';

export default class RulesScreen {
  constructor(name) {
    this.name = name;
  }

  init() {
    this.header = new HeaderView();
    this.view = new RulesView(this.name);

    this.view.nextClick = nextScreen;

    this.view.onInput = ({target: {value}}) => {
      stateHandler.nameInput = value;
      this.view.toggleButton(true);
      if (value === ``) {
        this.view.toggleButton(false);
      }
    };

    this.header.backClick = backToIntro;

    updateView(this.header, this.view);
  }
}
