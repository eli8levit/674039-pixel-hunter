import createElement from '../createElement.js';
import changeView from '../changeView.js';
import {game3, intro} from './index.js';

const template = `<div><header class="header">
                  <div class="header__back">
                    <button class="back" onclick="game2Back()">
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
                <div class="game" id="game2">
                  <p class="game__task">Угадай, фото или рисунок?</p>
                  <form class="game__content  game__content--wide">
                    <div class="game__option">
                      <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
                      <label onclick="onChooseGame2()" id="game2" class="game__answer  game__answer--photo">
                        <input name="question1" type="radio" value="photo">
                        <span>Фото</span>
                      </label>
                      <label onclick="onChooseGame2()" id="game2" class="game__answer  game__answer--wide  game__answer--paint">
                        <input name="question1" type="radio" value="paint">
                        <span>Рисунок</span>
                      </label>
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

export const game2 = createElement(template);

document.game2Back = () => changeView(game2, intro);
document.onChooseGame2 = () => changeView(game2, game3);
