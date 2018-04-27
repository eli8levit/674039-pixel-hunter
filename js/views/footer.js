const footer = (results) => `<div class="stats">
                              <ul class="stats">
                                ${createFooter(results)}
                              </ul>
                            </div>`;

const createFooter = (results) => {
  let str = ``;

  results.forEach((res) => {
    let status = ``;
    if (res.correct) {
      if (res.time < 10) {
        status = `fast`;
      } else if (res.time > 20) {
        status = `slow`;
      } else {
        status = `correct`;
      }
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

export default footer;
