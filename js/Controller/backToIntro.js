import stateHandler from './StateHandler';

const backToIntro = () => {
  const {state} = stateHandler;
  const nextState = Object.assign(state, {
    currentScreen: `intro`,
    lifes: 3,
    results: [],
    nameInput: ``
  });
  stateHandler.state = nextState;
};

export default backToIntro;
