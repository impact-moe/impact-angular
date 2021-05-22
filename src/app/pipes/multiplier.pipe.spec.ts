import { waitForAsync } from '@angular/core/testing';
import { MultiplierPipe } from './multiplier.pipe';

describe('MultiplierPipe', () => {
  let pipe: MultiplierPipe;

  beforeEach(() => { pipe = new MultiplierPipe(); });

  it('should create an array with one element given a negative value', waitForAsync(() => {
    expect(pipe.transform(-1).length).toBe(1);
  }));

  it('should create an array with one element given a zero value', waitForAsync(() => {
    expect(pipe.transform(0).length).toBe(1);
  }));

  it('should create an array with the expected number of elements', waitForAsync(() => {
    expect(pipe.transform(5).length).toBe(5);
  }));
});
