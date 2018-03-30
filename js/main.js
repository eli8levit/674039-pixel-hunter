
const main = document.getElementById(`main`);
const templates = document.getElementsByTagName(`template`);
const views = [];
// let count = 0;
let currentView = main;

for (let template of templates) {
  views.push(document.getElementById(template.id));
}

function changeView(num) {
  let content = document.createElement(`div`);
  let clone = document.importNode(views[num].content, true);
  content.appendChild(clone);
  content.setAttribute(`id`, `content`);
  currentView.parentNode.replaceChild(content, currentView);
  currentView = document.getElementById(`content`);
}

const counter = (function () {
  let count = 0;
  return (action) => {
    switch (action) {
      case `INCREMENT`: count = count + 1; break;
      case `DECREMENT`: count = count - 1; break;
      case `SET_MAX`: count = views.length - 1; break;
      case `SET_ZERO`: count = 0; break;
      default: return count;
    }
    return count;
  };
}());

function keyCheck(e) {
  if (e.altKey && e.key === `ArrowLeft`) {
    let count = counter() === 0 ? counter(`SET_MAX`) : counter(`DECREMENT`);
    changeView(count);
  }

  if (e.altKey && e.key === `ArrowRight`) {
    let count = counter() === views.length - 1 ? counter(`SET_ZERO`) : counter(`INCREMENT`);
    changeView(count);
  }
}

document.addEventListener(`keyup`, keyCheck, false);
