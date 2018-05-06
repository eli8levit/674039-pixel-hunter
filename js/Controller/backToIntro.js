import stateHandler from './StateHandler';
import timer from '../utils/timer';
import initialState from '../data/initialState';
import Loader from '../Controller/loader';
import {ScreenTypes} from '../data/config';

const backToIntro = () => {
  timer.stop();
  const {state} = stateHandler;
  const nextState = Object.assign(state, initialState, {results: []});
  stateHandler.state = nextState;
  stateHandler.screen = ScreenTypes.LOADING;
  Loader.showLoading();
  Loader.getData();
};

export default backToIntro;
