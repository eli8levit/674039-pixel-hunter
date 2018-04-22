import stateHandler from './StateHandler';

const nextScreen = () => {
  const {state} = stateHandler;
  const {next} = state.stages[state.currentScreen];
  const nextState = Object.assign(state, {currentScreen: next});
  stateHandler.state = nextState;
};

export default nextScreen;
