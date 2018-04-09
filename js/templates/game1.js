import createElement from '../createElement';
import changeView from '../changeView';
import {game2, intro} from './index';

const template = `<div><header class="header">
                    <div class="header__back">
                      <button class="back" onclick="game1Back()">
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
                    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
                    <form class="game__content">
                      <div class="game__option">
                        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
                        <label onClick="onChooseGame1()" class="game__answer game__answer--photo">
                          <input name="question1" type="radio" value="photo">
                          <span>Фото</span>
                        </label>
                        <label onClick="onChooseGame1()" class="game__answer game__answer--paint">
                          <input name="question1" type="radio" value="paint">
                          <span>Рисунок</span>
                        </label>
                      </div>
                      <div class="game__option">
                        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
                        <label onClick="onChooseGame1()" class="game__answer  game__answer--photo">
                          <input name="question2" type="radio" value="photo">
                          <span>Фото</span>
                        </label>
                        <label onClick="onChooseGame1()" class="game__answer  game__answer--paint">
                          <input name="question2" type="radio" value="paint">
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
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--unknown"></li>
                        <li class="stats__result stats__result--unknown"></li>
                      </ul>
                    </div>
                  </div>
                  </div>`;

export const game1 = createElement(template);

document.game1Back = () => changeView(game1, intro);

const counter = (function () {
  let count = 0;
  return () => count++;
}());

document.onChooseGame1 = () => {
  let count = counter();
  if (count === 2) {
    changeView(game1, game2);
  }
};

