import GreetingView from '../views/greeting-view';
import updateView from '../controller/update-view';
import changeScreen from '../controller/change-screen';

export default class GreetingScreen {
  init() {
    this.view = new GreetingView();
    this.view.nextClick = changeScreen;
    updateView(this.view);
  }
}
