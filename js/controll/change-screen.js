import StateHandler from './state-handler';

const changeScreen = () => {
  const {state} = StateHandler;
  let {next} = state.stages[state.currentScreen];

  if (state.lives === 0) {
    next = state.endScreen;
  }
  StateHandler.screen = next;
};

export default changeScreen;
