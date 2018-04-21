const handleState = (() => {

  let currentState = {
    currentScreen: `intro`,
    lifes: 3,
    time: 0,
    results: [],
    stages: {
      'intro': {next: `greeting`},
      'greeting': {next: `rules`},
      'rules': {
        next: `game1`,
        header: true
      },
    }
  };

  return (nextState) => {
    if (nextState) {
      currentState = nextState;
    }
    return currentState;
  };
})();

export default handleState;
