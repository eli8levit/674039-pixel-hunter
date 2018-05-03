import stateHandler from './StateHandler';
import timer from '../utils/Timer';
import initialState from '../data/initialState';
import Loader from '../Controller/Loader';
import screens from '../data/screenTypes';

const backToIntro = () => {
  timer.stop();
  const {state} = stateHandler;
  const nextState = Object.assign(state, initialState, {results: []});
  stateHandler.state = nextState;
  stateHandler.screen = screens.LOADING;
  Loader.showLoading();
  Loader.getData();
};

export default backToIntro;
