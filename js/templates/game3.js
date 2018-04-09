import createElement from '../createElement';
import changeView from '../changeView';
import {stats, intro} from './index';

const template = `<div><header class="header">
                  <div class="header__back">
                    <button class="back" onclick="game3Back()">
                      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                      <img src="img/logo_small.svg" width="101" height="44">
                    </button>
                  </div>
                  <h1 class="game__timer">NN</h1>
                  <div class="game__lives">
                    <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
                    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
                    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
                  </div>
                </header>
                <div class="game">
                  <p class="game__task">Найдите рисунок среди изображений</p>
                  <form class="game__content  game__content--triple">
                    <div class="game__option" onclick="game3Choose()">
                      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
                    </div>
                    <div class="game__option  game__option--selected" onclick="game3Choose()">
                      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
                    </div>
                    <div class="game__option" onclick="game3Choose()">
                      <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
                    </div>
                  </form>
                  <div class="stats">
                    <ul class="stats">
                      <li class="stats__result stats__result--wrong"></li>
                      <li class="stats__result stats__result--slow"></li>
                      <li class="stats__result stats__result--fast"></li>
                      <li class="stats__result stats__result--correct"></li>
                      <li class="stats__result stats__result--wrong"></li>
                      <li class="stats__result stats__result--unknown"></li>
                      <li class="stats__result stats__result--slow"></li>
                      <li class="stats__result stats__result--unknown"></li>
                      <li class="stats__result stats__result--fast"></li>
                      <li class="stats__result stats__result--unknown"></li>
                    </ul>
                  </div>
                </div></div>`;

export const game3 = createElement(template);

document.game3Back = () => changeView(game3, intro);
document.game3Choose = () => changeView(game3, stats);

