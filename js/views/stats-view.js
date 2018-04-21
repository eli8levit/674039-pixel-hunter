
import AbstractView from './AbstractView';
import pointCounter from '../utils/pointCounter';
import bonusCount from '../utils/bonusCount';
import footer from './footer';

export default class StatsView extends AbstractView {
  constructor(state) {
    super();
    this.state = state;
    this.results = state.results;
    this.statistic = bonusCount(this.state.results);
    this.totalPoints = pointCounter(this.state.results, this.state.lifes);
  }

  bind() {

  }

  get template() {
    return `<div class="result">
              <h1>${this.state.lifes === 0 ? `FAIL` : `Победа!`}</h1>
              <table class="result__table">
                <tr>
                  <td class="result__number">1.</td>
                  <td colspan="2">
                  ${footer(this.results)}
                  </td>
                  <td class="result__points">×&nbsp;100</td>
                  <td class="result__total">${this.statistic.correct * 100}</td>
                </tr>
                ${this.state.lifes !== 0 ? `<tr>
                  <td></td>
                  <td class="result__extra">Бонус за скорость:</td>
                  <td class="result__extra">${this.statistic.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                  <td class="result__points">×&nbsp;50</td>
                  <td class="result__total">${this.statistic.fast * 50}</td>
                </tr>
                <tr>
                  <td></td>
                  <td class="result__extra">Бонус за жизни:</td>
                  <td class="result__extra">${this.state.lifes}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                  <td class="result__points">×&nbsp;50</td>
                  <td class="result__total">${this.state.lifes * 50}</td>
                </tr>
                <tr>
                  <td></td>
                  <td class="result__extra">Штраф за медлительность:</td>
                  <td class="result__extra">${this.statistic.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                  <td class="result__points">×&nbsp;50</td>
                  <td class="result__total">${this.statistic.slow * 50}</td>
                </tr>
                <tr>
                  <td colspan="5" class="result__total  result__total--final">${this.totalPoints}</td>
                </tr>` : ``}
              </table>
            </div>`;
  }
}
