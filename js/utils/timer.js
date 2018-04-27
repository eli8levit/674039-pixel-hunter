
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
      this.notificateAll();
    }, 1000);
  }

  pause() {
    clearInterval(this.timer);
    this.timer = null;
  }

  continue() {
    return this.start();
  }

  stop() {
    this.removeAll();
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this._minuts = 0;
    this._seconds = 1;
  }

  get time() {
    return `${this._minuts}:${this._seconds}`;
  }

  addListener(listener) {
    this.listeners.add(listener);
  }

  removeListener(listener) {
    this.listeners.delete(listener);
  }

  removeAll() {
    this.listeners.clear();
  }

  notificateAll() {
    this.listeners.forEach((listener) => {
      listener(this.time);
    });
  }
}

const timer = new Timer();
export default timer;
