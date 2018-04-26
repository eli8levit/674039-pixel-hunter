import GreetingView from '../views/greeting-view';
import updateView from '../Controller/updateView';
import nextScreen from '../Controller/nextScreen';

export default class GreetingScreen {
  init() {
    this.view = new GreetingView();
    this.view.nextClick = nextScreen;
    updateView(this.view);
  }
}
