import Screens from './screenTypes';

const initialState = {
  currentScreen: Screens.LOADING,
  nameInput: ``,
  lives: 3,
  time: `0:1`,
  results: [],
  startScreen: Screens.INTRO,
  endScreen: Screens.STATS,
  gameScreen: `game0`,
  staticStages: {
    'loading': {next: Screens.INTRO},
    'intro': {next: Screens.GREETING},
    'greeting': {next: Screens.RULES},
    'rules': {next: `game0`}
  }
};

export default initialState;
