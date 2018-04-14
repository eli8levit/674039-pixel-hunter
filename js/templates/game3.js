import {header} from './header';
import {footer} from './footer';

export const game3 = (state, stages) => `${header(state, true)}<div class="game">
                        <p class="game__task">${stages[state.currentScreen].content.title}</p>
                        <form class="game__content  game__content--triple">
                          <div class="game__option" id="question1">
                            <img src="${stages[state.currentScreen].content.photo[0]}" alt="Option 1" width="304" height="455">
                          </div>
                          <div class="game__option  game__option--selected" id="question1">
                            <img src="${stages[state.currentScreen].content.photo[1]}" alt="Option 1" width="304" height="455">
                          </div>
                          <div class="game__option" id="question1" name="question1">
                            <img src="${stages[state.currentScreen].content.photo[2]}" alt="Option 1" width="304" height="455">
                          </div>
                        </form>
                        ${footer(stages)}
                      </div>`;


