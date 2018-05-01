const initialState = {
  currentScreen: `loading`,
  nameInput: ``,
  lifes: 3,
  time: `0:1`,
  game: false,
  results: [],
  totalResult: [],
  startScreen: `intro`,
  endScreen: `stats`,
  gameScreen: `game0`,
  staticStages: {
    'loading': {next: `intro`},
    'intro': {next: `greeting`},
    'greeting': {next: `rules`},
    'rules': {next: `game0`},
    'stats': {
      screen: `stats`,
      content: {
        title: `Угадайте для каждого изображения фото или рисунок?`
      }
    }
  }
};

export default initialState;
