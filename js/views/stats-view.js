
import AbstractView from './abstract-view';
import pointCount from '../utils/point-сount';
import bonusCount from '../utils/bonus-сount';
import getFooter from './footer';

export default class StatsView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return this.data.map((game, key) => {

      const statistic = bonusCount(game.results);
      const totalPoints = pointCount(game.results, game.lives);

      return `<div class="result">
        ${key === 0 ? `<h1 class="result__title">${this.data[this.data.length - 1].lives === 0 ? `FAIL` : `Победа!`}</h1>` : ``}
        <table class="result__table">
          <tr>
            <td class="result__number">${key + 1}.</td>
            <td colspan="2">
            ${getFooter(game.results)}
            </td>
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">${game.lives === 0 ? `FAIL` : statistic.correct * 100}</td>
          </tr>
          ${game.lives !== 0 ? `<tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${statistic.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${statistic.fast * 50}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${game.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${game.lives * 50}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${statistic.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${statistic.slow * 50}</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">${totalPoints}</td>
          </tr>` : ``}
        </table>
      </div>`;
    }).join(``);
  }
}
