import {expect} from 'chai';
import timer from './Timer';

describe(`Timer`, () => {
  describe(`should have:`, () => {
    it(`- property minuts`, () => {
      expect(timer).to.have.property(`_minuts`);
    });

    it(`- property seconds`, () => {
      expect(timer).to.have.property(`_seconds`);
    });

    it(`- property listeners`, () => {
      expect(timer).to.have.property(`listeners`);
    });
  });

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

  describe(`start method`, () => {
    it(`should create prop timer`, () => {
      timer.start();
      expect(timer).to.have.property(`timer`);
    });
  });
});
