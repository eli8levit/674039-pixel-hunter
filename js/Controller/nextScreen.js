import stateHandler from './StateHandler';
import timer from '../utils/timer';

const nextScreen = () => {
  const {state} = stateHandler;
  let {next} = state.stages[state.currentScreen];

  if (next === state.gameScreen) {
    timer.start();
  } else if (state.lives === 0) {
    next = state.endScreen;
  }
  stateHandler.screen = next;
};

export default nextScreen;
