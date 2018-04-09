import {assert, expect} from 'chai';
import timer from './timer';

const fn = () => {};

describe(`Timer`, () => {
  it(`should throw errow if time is not provided`, () => {
    expect(timer).to.throw();
  });

  it(`should throw an error if done parameter is not provided`, () => {
    expect(() => timer(10)).to.throw();
  });

  it(`should throw an error if type of time is not a number`, () => {
    expect(() => timer(`test`)).to.throw();
  });

  it(`should throw an error if type of done is not a function`, () => {
    expect(() => timer(`string`, 9)).to.throw();
  });

  it(`should throw error if time is too big`, () => {
    expect(() => timer(400, fn));
  });

  it(`should return a function`, () => {
    assert.typeOf(timer(5, fn), `function`);
  });
});
