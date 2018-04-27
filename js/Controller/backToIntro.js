import stateHandler from './StateHandler';
import timer from '../utils/timer';

const backToIntro = () => {
  timer.stop();
  const {state} = stateHandler;
  const nextState = Object.assign(state, {
    lifes: 3,
    game: false,
    time: `0:1`,
    results: [],
    nameInput: ``
  });
  stateHandler.state = nextState;
  stateHandler.screen = state.startScreen;
};

export default backToIntro;
