
import AbstractView from './AbstractView';
import footer from './footer';

export default class Game3 extends AbstractView {
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
    const answerCollection = this.element.getElementsByClassName(`game__option`);
    const answerArr = Array.prototype.slice.call(answerCollection);

    answerArr.forEach((answer) => {
      answer.addEventListener(`click`, (e) => this.onAnswer(e, answerArr, 1), false);
    });
  }

  get template() {
    return `<div class="game">
              <p class="game__task">${this.stage.content.title}</p>
              <form class="game__content  game__content--triple">
                <div class="game__option" id="question1">
                  <img src="${this.stage.content.photo[0]}" alt="Option 1" width="304" height="455">
                </div>
                <div class="game__option  game__option--selected" id="question1">
                  <img src="${this.stage.content.photo[1]}" alt="Option 1" width="304" height="455">
                </div>
                <div class="game__option" id="question1" name="question1">
                  <img src="${this.stage.content.photo[2]}" alt="Option 1" width="304" height="455">
                </div>
              </form>
              ${footer(this.results)}
            </div>`;
  }
}
