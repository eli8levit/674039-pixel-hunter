import IntroView from '../views/intro-view';
import updateView from '../Controller/updateView';
import stateHandler from '../Controller/StateHandler';
import nextScreen from '../Controller/nextScreen';

const intro = new IntroView();

const {state} = stateHandler;

intro.nextClick = nextScreen;

if (state.currentScreen === `intro`) {
  updateView(intro);
}

stateHandler.addListener((newState) => {
  if (newState.currentScreen === `intro`) {
    updateView(intro);
  }
});

export default intro;
