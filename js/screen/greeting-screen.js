import GreetingView from '../views/greeting-view';
import updateView from '../controll/update-view';
import changeScreen from '../controll/change-screen';

export default class GreetingScreen {
  init() {
    this.view = new GreetingView();
    this.view.nextClick = changeScreen;
    updateView(this.view);
  }
}
