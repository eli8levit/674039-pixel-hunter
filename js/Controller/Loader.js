import LoadingView from '../views/loading-view';
import ErrorView from '../views/error-view';
import updateView from './updateView';
import stateHandler from './StateHandler';
import nextScreen from './nextScreen';
import adaptData from './adaptData';

const checkStatus = (res) => {
  if (res.ok) {
    return res;
  } else {
    throw new Error(`${res.status}: ${res.statusText || `something went wrong on keks server...`}`);
  }
};

export default class Loader {
  constructor() {
  }

  static getData() {
    fetch(`https://es.dump.academy/pixel-hunter/questions`)
        .then((res) => checkStatus(res))
        .then((res) => res.json())
        .then((body) => {
          adaptData(stateHandler.state, body, (err, data) => {
            const newState = Object.assign({}, stateHandler.state);
            newState.stages = Object.assign(data, newState.staticStages);
            stateHandler.state = newState;
            nextScreen();
          });
        }).catch((err) => this.showError(err));
  }

  static showLoading() {
    updateView(new LoadingView());
  }

  static showError(err) {
    updateView(new ErrorView(err));
  }
}
