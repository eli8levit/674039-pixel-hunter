import createElement from '../Controller/createElement';
import changeView from '../Controller/changeView';
import {game1, intro} from './index';

const template = `<div><header class="header">
                  <div class="header__back">
                    <button class="back" onclick="rulesBack()">
                      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
                      <img src="img/logo_small.svg" width="101" height="44">
                    </button>
                  </div>
                </header>
                <div class="rules" id="rules">
                  <h1 class="rules__title">Правила</h1>
                  <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
                    src="img/photo_icon.png" width="16" height="16"> или рисунок <img
                    src="img/paint_icon.png" width="16" height="16" alt="">.<br>
                    Фотографиями или рисунками могут быть оба изображения.<br>
                    На каждую попытку отводится 30 секунд.<br>
                    Ошибиться можно не более 3 раз.<br>
                    <br>
                    Готовы?
                  </p>
                  <form class="rules__form">
                    <input onkeypress="onRulesChange(this.value)" value="" class="rules__input" type="text" placeholder="Ваше Имя">
                    <button class="rules__button  continue" type="submit" id="rules__button" onclick="onRulesSubmit()" disabled>Go!</button>
                  </form>
                </div></div>`;

export const rules = createElement(template);

document.rulesBack = () => changeView(rules, intro);
document.onRulesSubmit = () => changeView(rules, game1);

document.onRulesChange = (value) => {
  if (value !== ``) {
    document.getElementById(`rules__button`).disabled = false;
  } else {
    document.getElementById(`rules__button`).disabled = true;
  }
};
