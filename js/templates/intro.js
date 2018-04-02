import createElement from '../createElement.js';
import changeView from '../changeView.js';
import {greeting} from './index.js';

const template = `<div id="intro" class="intro">
                    <h1 class="intro__asterisk" onclick="handleIntro()">*</h1>
                    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
                  </div>`;

export const intro = createElement(template);

const main = document.getElementById(`main`);
changeView(main, intro);

document.handleIntro = () => changeView(intro, greeting);
