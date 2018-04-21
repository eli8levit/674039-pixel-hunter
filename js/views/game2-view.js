
import AbstractView from './AbstractView';
import footer from './footer';

export default class Game2 extends AbstractView {
  constructor(state) {
    super();
    this.results = state.results;
    this.stage = state.stages[state.currentScreen];
  }

  nextClick() {

  }

  onAnswer() {

  }

  bind() {
    const answerCollection = this.element.getElementsByClassName(`game__answer`);
    const answerArr = Array.prototype.slice.call(answerCollection);

    answerArr.forEach((answer) => {
      answer.addEventListener(`click`, (e) => this.onAnswer(e, answerArr, 1), false);
    });
  }

  get template() {
    return `<div class="game" id="game2">
              <p class="game__task">${this.stage.content.title}</p>
              <form class="game__content  game__content--wide">
                <div class="game__option">
                  <img src="${this.stage.content.photo[0]}" alt="Option 1" width="705" height="455">
                  <label class="game__answer  game__answer--photo">
                    <input name="question1" type="radio" value="photo">
                    <span>Фото</span>
                  </label>
                  <label class="game__answer  game__answer--wide  game__answer--paint">
                    <input name="question1" type="radio" value="paint">
                    <span>Рисунок</span>
                  </label>
                </div>
              </form>
              ${footer(this.results)}
            </div>`;
  }
}
