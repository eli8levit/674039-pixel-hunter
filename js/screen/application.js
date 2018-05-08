import IntroScreen from './intro-screen';
import GreetingScreen from './greeting-screen';
import RulesScreen from './rules-screen';
import GameScreen from './game-screen';
import Stats from './stats-screen';
import StateHandler from '../controll/state-handler';


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
    const rules = new RulesScreen(StateHandler.nameInput);
    rules.init();
  }

  static showGame() {
    const {state} = StateHandler;
    const game = new GameScreen(state);
    game.init();
  }

  static showStats() {
    const {state} = StateHandler;
    const stats = new Stats(state);
    stats.init();
  }
}
