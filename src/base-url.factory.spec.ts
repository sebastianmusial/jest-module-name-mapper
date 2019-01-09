import { baseUrlFactory } from './base-url.factory';

describe('baseUrlFactory', () => {
  test('returns format integrated with Jest', () => {
    expect(baseUrlFactory('../')).toEqual('<rootDir>/../');
    expect(baseUrlFactory('.')).toEqual('<rootDir>/.');
    expect(baseUrlFactory('./')).toEqual('<rootDir>/');
    expect(baseUrlFactory('./src')).toEqual('<rootDir>/src');
    expect(baseUrlFactory('./src/')).toEqual('<rootDir>/src/');
    expect(baseUrlFactory('../src')).toEqual('<rootDir>/../src');
  });
});
