
export const footer = (stages) => `<div class="stats">
                              <ul class="stats">
                                ${createFooter(stages)}
                              </ul>
                            </div>`;

const createFooter = (stages) => {
  let str = ``;
  const results = stages[`results`];

  results.forEach((res) => {
    let status = ``;
    if (res.correct) {
      status = res.fast ? `fast` : `slow`;
    } else {
      status = `wrong`;
    }
    str += `<li class="stats__result stats__result--${status}"></li>`;
  });

  for (let i = results.length; i < 10; i++) {
    str += `<li class="stats__result stats__result--unknown">`;
  }
  return str;
};
