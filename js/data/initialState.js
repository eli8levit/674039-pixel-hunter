import screens from './screenTypes';

const initialState = {
  currentScreen: screens.LOADING,
  nameInput: ``,
  lives: 3,
  time: `0:1`,
  results: [],
  startScreen: screens.INTRO,
  endScreen: screens.STATS,
  gameScreen: `game0`,
  staticStages: {
    'loading': {next: screens.INTRO},
    'intro': {next: screens.GREETING},
    'greeting': {next: screens.RULES},
    'rules': {next: `game0`}
  }
};

export default initialState;
