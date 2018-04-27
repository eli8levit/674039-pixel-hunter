import IntroScreen from './intro-screen';
import GreetingScreen from './greeting-screen';
import RulesScreen from './rules-screen';
import GameScreen from './game-screen';
import Stats from './stats-screen';
import stateHandler from '../Controller/StateHandler';


export default class Application {

  static showIntro() {
    const intro = new IntroScreen();
    intro.init();
  }

  static showGreeting() {
    const greeting = new GreetingScreen();
    greeting.init();
  }

  static showRules() {
    const rules = new RulesScreen(stateHandler.nameInput);
    rules.init();
  }

  static showGame() {
    const {state} = stateHandler;
    const game = new GameScreen(state);
    game.init();
  }

  static showStats() {
    const {state} = stateHandler;
    const stats = new Stats(state);
    stats.init();
  }
}
