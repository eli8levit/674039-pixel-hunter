import stateHandler from './StateHandler';
import timer from '../utils/timer';
import initialState from '../data/initialState';

const backToIntro = () => {
  timer.stop();
  const {state} = stateHandler;
  const nextState = Object.assign(state, initialState, {results: []});
  stateHandler.state = nextState;
  stateHandler.screen = initialState.startScreen;
};

export default backToIntro;
