export default function handleName(state, stages, cb, input) {
  let value = stages[state.currentScreen].value;
  return (() => {
    if (input.inputType === `deleteContentBackward` && value !== ``) {
      value = value.substring(0, value.length - 1);
    } else {
      value += input.data;
    }
    const nextStages = Object.assign({}, stages);
    nextStages[state.currentScreen].disabled = false;
    nextStages[state.currentScreen].value = value;
    cb(state, nextStages);
    document.getElementsByClassName(input.target.className)[0].select();
  })();
}
