import IntroView from '../views/intro-view';
import updateView from '../Controller/updateView';
import nextScreen from '../Controller/nextScreen';


class IntroScreen {
  init() {
    this.view = new IntroView();
    this.view.nextClick = nextScreen;
    updateView(this.view);
  }
}

export default IntroScreen;
