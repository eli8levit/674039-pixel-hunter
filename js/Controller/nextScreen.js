import stateHandler from './StateHandler';
import timer from '../utils/timer';

const nextScreen = () => {
  const {state} = stateHandler;
  let {next} = state.stages[state.currentScreen];

  if (next === state.gameScreen) {
    stateHandler.game = true;
    timer.start();

  } else if (state.lifes === 0) {
    next = state.endScreen;
  }
  stateHandler.screen = next;
};

export default nextScreen;
