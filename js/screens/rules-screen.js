import RulesView from '../views/rules-view';
import HeaderView from '../views/header-view';
import StateHandler from '../controller/state-handler';
import returnToIntro from '../controller/return-to-intro';
import changeScreen from '../controller/change-screen';
import updateView from '../controller/update-view';

export default class RulesScreen {
  constructor(name) {
    this.name = name;
  }

  init() {
    this.header = new HeaderView();
    this.view = new RulesView(this.name);

    this.view.nextClick = changeScreen;

    this.view.onInput = ({target: {value}}) => {
      StateHandler.nameInput = value;
      this.view.toggleButton(true);
      if (value === ``) {
        this.view.toggleButton(false);
      }
    };

    this.header.onButtonBackClick = returnToIntro;

    updateView(this.header, this.view);
  }
}
