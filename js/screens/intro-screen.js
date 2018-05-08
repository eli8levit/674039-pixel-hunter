import IntroView from '../views/intro-view';
import updateView from '../controller/update-view';
import changeScreen from '../controller/change-screen';

class IntroScreen {
  init() {
    this.view = new IntroView();
    this.view.nextClick = changeScreen;
    updateView(this.view);
  }
}

export default IntroScreen;
