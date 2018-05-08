import IntroView from '../views/intro-view';
import updateView from '../controll/update-view';
import changeScreen from '../controll/change-screen';

class IntroScreen {
  init() {
    this.view = new IntroView();
    this.view.nextClick = changeScreen;
    updateView(this.view);
  }
}

export default IntroScreen;
