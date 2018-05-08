import StateHandler from './state-handler';
import Timer from '../utils/timer';
import initialState from '../data/initial-state';

const returnToIntro = () => {
  Timer.stop();
  const {state} = StateHandler;
  const nextState = Object.assign(state, initialState, {results: []});
  StateHandler.state = nextState;
  StateHandler.screen = initialState.startScreen;
};

export default returnToIntro;
