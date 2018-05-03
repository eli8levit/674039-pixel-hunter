import LoadingView from '../views/loading-view';
import ErrorView from '../views/error-view';
import updateView from './updateView';
import stateHandler from './StateHandler';
import nextScreen from './nextScreen';
import adaptData from './adaptData';
import HeaderView from '../views/header-view';
import backToIntro from './backToIntro';

const APP_ID = `3256445`;
const BASE_URL = `https://es.dump.academy/pixel-hunter`;
const DEFAULT_NAME = `unidentified_raccoon`;

const checkStatus = (res) => {
  if (res.ok) {
    return res;
  } else {
    throw new Error(`${res.status}: ${res.statusText || `something went wrong on keks server...`}`);
  }
};

export default class Loader {

  static getData() {
    fetch(`${BASE_URL}/questions`)
        .then(checkStatus)
        .then((res) => res.json())
        .then((body) => {
          adaptData(stateHandler.state, body, (err, data) => {
            if (err) {
              this.showError(err);
            }
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
    const header = new HeaderView();
    header.backClick = backToIntro;
    updateView(header, new ErrorView(err));
  }

  static getResults(name = DEFAULT_NAME, callback) {
    fetch(`${BASE_URL}/stats/${APP_ID}-${name}`)
        .then(checkStatus)
        .then((res) => res.json())
        .then((body) => {
          callback(body);
        }).catch((err) => this.showError(err));
  }

  static uploadData(data, name = DEFAULT_NAME, callback) {
    const options = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };

    fetch(`${BASE_URL}/stats/${APP_ID}-${name}`, options)
        .then(checkStatus)
        .then((res) => callback(res));
  }
}
