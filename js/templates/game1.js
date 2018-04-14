import {header} from './header';
import {footer} from './footer';

export const game1 = (state, stages) => `${header(state, true)}<div class="game">
                                  <p class="game__task">${stages[state.currentScreen].content.title}</p>
                                  <form class="game__content">
                                    <div class="game__option">
                                      <img src="${stages[state.currentScreen].content.photo[0]}" alt="Option 1" width="468" height="458">
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
                                      <img src="${stages[state.currentScreen].content.photo[1]}" alt="Option 2" width="468" height="458">
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
                                  ${footer(stages)}
                                </div>`;
