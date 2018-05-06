import {expect} from 'chai';
import timer from './timer';

describe(`Timer`, () => {
  it(`should throw an error if adding listener that's not func`, () => {
    expect(() => timer.addListener(5)).to.throw();
  });

  describe(`stop method`, () => {
    const testFunc = (time) => time;

    it(`should remove all listeners`, () => {
      timer.addListener(testFunc);
      timer.start();
      timer.stop();
      expect(timer.listeners.size).equal(0);
    });

    it(`should reset time`, () => {
      timer.start();
      timer.stop();
      expect(timer).to.satisfy(() => {
        return timer._minuts === 0 && timer._seconds === 1;
      });
    });
  });
});
