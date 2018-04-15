import {header} from './header';
import {footer} from './footer';
import pointCounter from '../Controller/pointCounter';
import bonusCount from '../Controller/bonusCount';

export const stats = (state, stages) => {
  const statistic = bonusCount(stages.results);
  return `${header(state)}
      <div class="result">
        <h1>${state.lifes === 0 ? `FAIL` : `Победа!`}</h1>
        <table class="result__table">
          <tr>
            <td class="result__number">1.</td>
            <td colspan="2">
              ${footer(stages)}
            </td>
            <td class="result__points">×&nbsp;100</td>
            <td class="result__total">${statistic.correct * 100}</td>
          </tr>
          ${state.lifes !== 0 ? `<tr>
            <td></td>
            <td class="result__extra">Бонус за скорость:</td>
            <td class="result__extra">${statistic.fast}&nbsp;<span class="stats__result stats__result--fast"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${statistic.fast * 50}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Бонус за жизни:</td>
            <td class="result__extra">${state.lifes}&nbsp;<span class="stats__result stats__result--alive"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${state.lifes * 50}</td>
          </tr>
          <tr>
            <td></td>
            <td class="result__extra">Штраф за медлительность:</td>
            <td class="result__extra">${statistic.slow}&nbsp;<span class="stats__result stats__result--slow"></span></td>
            <td class="result__points">×&nbsp;50</td>
            <td class="result__total">${statistic.slow * 50}</td>
          </tr>
          <tr>
            <td colspan="5" class="result__total  result__total--final">${pointCounter(stages.results, state.lifes)}</td>
            </tr>` : ``}
        </table>
      </div>`;
};
