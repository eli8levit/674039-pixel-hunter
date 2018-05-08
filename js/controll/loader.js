import LoadingView from '../views/loading-view';
import ErrorView from '../views/error-view';
import updateView from './update-view';
import StateHandler from './state-handler';
import changeScreen from './change-screen';
import adaptData from './adapt-data';
import HeaderView from '../views/header-view';
import returnToIntro from './return-to-intro';

const APP_ID = `3256445`;
const BASE_URL = `https://es.dump.academy/pixel-hunter`;
const DEFAULT_NAME = `unidentified_raccoon`;

const checkStatus = (res) => {
  if (!res.ok) {
    throw new Error(`${res.status}: ${res.statusText || `something went wrong on keks server...`}`);
  }
  return res;
};

export default class Loader {

  static getData() {
    fetch(`${BASE_URL}/questions`)
        .then(checkStatus)
        .then((res) => res.json())
        .then((body) => {
          adaptData(StateHandler.state, body, (err, data) => {
            if (err) {
              this.showError(err);
            }
            const newState = Object.assign({}, StateHandler.state);
            newState.stages = Object.assign(data, newState.staticStages);
            StateHandler.state = newState;
            changeScreen();
          });
        }).catch((err) => this.showError(err));
  }

  static showLoading() {
    updateView(new LoadingView());
  }

  static showError(err) {
    const header = new HeaderView();
    header.onButtonBackClick = returnToIntro;
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
