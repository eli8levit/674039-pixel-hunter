
const main = document.getElementById(`main`);
const templates = document.getElementsByTagName(`template`);
const views = [];
let count = 0;
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

function keyCheck(e) {
  if (e.altKey && e.key === `ArrowLeft`) {
    count = count === 0 ? views.length - 1 : count - 1;
    changeView(count);
  }

  if (e.altKey && e.key === `ArrowRight`) {
    count = count === views.length - 1 ? 0 : count + 1;
    changeView(count);
  }
}
document.addEventListener(`keyup`, keyCheck, false);
