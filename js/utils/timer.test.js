import {expect} from 'chai';
import Timer from './timer';
import initialState from '../data/initial-state';

describe(`Timer`, () => {
  it(`should throw an error if adding listener that's not func`, () => {
    expect(() => Timer.addListener(5)).to.throw();
  });

  describe(`stop method`, () => {
    const testFunc = (time) => time;

    it(`should remove all listeners`, () => {
      Timer.addListener(testFunc);
      Timer.start();
      Timer.stop();
      expect(Timer._listeners.size).equal(0);
    });

    it(`should reset time`, () => {
      Timer.start();
      Timer.stop();
      expect(Timer).to.satisfy(() => {
        return Timer.time === initialState.time;
      });
    });
  });
});
