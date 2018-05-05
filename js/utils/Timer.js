
class Timer {
  constructor() {
    this._minuts = 0;
    this._seconds = 1;
    this.listeners = new Set();
  }

  start() {
    this.timer = setInterval(() => {
      this._seconds += 1;
      if (this._seconds === 60) {
        this._minuts += 1;
        this._seconds = 0;
      }
      this.notifyAll();
    }, 1000);
  }

  pause() {
    clearInterval(this.timer);
  }

  continue() {
    return this.start();
  }

  stop() {
    this.removeAll();
    if (this.timer) {
      clearInterval(this.timer);
    }
    this._minuts = 0;
    this._seconds = 1;
  }

  get time() {
    return `${this._minuts}:${this._seconds}`;
  }

  addListener(listener) {
    if (!(listener instanceof Function)) {
      throw new Error(`listener should be a function`);
    }
    this.listeners.add(listener);
  }

  removeAll() {
    this.listeners.clear();
  }

  notifyAll() {
    this.listeners.forEach((listener) => {
      listener(this.time);
    });
  }
}

export default new Timer();
