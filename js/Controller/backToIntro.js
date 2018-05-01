import stateHandler from './StateHandler';
import timer from '../utils/Timer';
import initialState from '../data/initialState';

const backToIntro = () => {
  timer.stop();
  const {state} = stateHandler;
  const nextState = Object.assign(state, initialState);
  stateHandler.state = nextState;
  stateHandler.screen = state.startScreen;
};

export default backToIntro;
