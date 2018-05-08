const container = document.querySelector(`#main`);

function updateView(...screens) {
  container.innerHTML = ``;
  screens.forEach((screen) => container.appendChild(screen.element));
}

export default updateView;
