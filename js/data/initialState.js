import {ScreenTypes} from './config';

const initialState = {
  currentScreen: ScreenTypes.LOADING,
  nameInput: ``,
  lives: 3,
  time: `0:1`,
  results: [],
  startScreen: ScreenTypes.INTRO,
  endScreen: ScreenTypes.STATS,
  gameScreen: `game0`,
  staticStages: {
    'loading': {next: ScreenTypes.INTRO},
    'intro': {next: ScreenTypes.GREETING},
    'greeting': {next: ScreenTypes.RULES},
    'rules': {next: `game0`}
  }
};

export default initialState;
