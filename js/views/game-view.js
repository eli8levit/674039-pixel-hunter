
import AbstractView from './AbstractView';
import footer from './footer';

export default class Game extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.stage = state.stages[state.currentScreen];
    this.game = this.stage.screen;
    this.startTime = this.state.time;
  }

  nextClick() {

  }

  onAnswer() {

  }

  bind() {
    const className = this.game === `game3` ? `game__option` : `game__answer`;
    const limit = this.game === `game1` ? 2 : 1;
    const answerCollection = this.element.getElementsByClassName(className);
    const answerArr = Array.prototype.slice.call(answerCollection);

    answerArr.forEach((answer) => {
      answer.addEventListener(`click`, (e) => this.onAnswer(e, answerArr, limit, this.state, this.startTime), false);
    });
  }

  get template() {
    let res = ``;
    switch (this.game) {
      case `game1`: res = `<div class="game">
                              <p class="game__task">${this.stage.content.title}</p>
                              <form class="game__content">
                                <div class="game__option">
                                  <img src="${this.stage.content.photo[0]}" alt="Option 1" width="468" height="458">
                                  <label class="game__answer game__answer--photo">
                                    <input name="question1" type="radio" value="photo">
                                    <span>Фото</span>
                                  </label>
                                  <label class="game__answer game__answer--paint">
                                    <input name="question1" type="radio" value="paint">
                                    <span>Рисунок</span>
                                  </label>
                                </div>
                                <div class="game__option">
                                  <img src="${this.stage.content.photo[1]}" alt="Option 2" width="468" height="458">
                                  <label class="game__answer  game__answer--photo">
                                    <input name="question2" type="radio" value="photo">
                                    <span>Фото</span>
                                  </label>
                                  <label class="game__answer  game__answer--paint">
                                    <input name="question2" type="radio" value="paint">
                                    <span>Рисунок</span>
                                  </label>
                                </div>
                              </form>
                              ${footer(this.state.results)}
                            </div>`; break;

      case `game2`: res = `<div class="game" id="game2">
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
                            ${footer(this.state.results)}
                          </div>`; break;

      case `game3`: res = `<div class="game">
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
                            ${footer(this.state.results)}
                          </div>`; break;

      default: res = `<h1>Template not found</h1>`;
    }
    return res;
  }
}
