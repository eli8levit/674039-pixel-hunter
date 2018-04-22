import GreetingView from '../views/greeting-view';
import updateView from '../Controller/updateView';
import stateHandler from '../Controller/StateHandler';
import nextScreen from '../Controller/nextScreen';

const greeting = new GreetingView();

stateHandler.addListener((nextState) => {
  if (nextState.currentScreen === `greeting`) {
    updateView(greeting);
  }
});

greeting.nextClick = nextScreen;


export default greeting;
