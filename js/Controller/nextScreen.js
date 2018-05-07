import stateHandler from './StateHandler';

const nextScreen = () => {
  const {state} = stateHandler;
  let {next} = state.stages[state.currentScreen];

  if (state.lives === 0) {
    next = state.endScreen;
  }
  stateHandler.screen = next;
};

export default nextScreen;
