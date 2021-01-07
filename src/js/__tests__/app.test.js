import ErrorRepository from '../app';

test('Error 1 should be returned', () => {
  const myError = new ErrorRepository();
  const firstError = myError.translate(1);
  expect(firstError).toBe('Error № 1');
});

test('Unknown error should be returned', () => {
  const myError = new ErrorRepository();
  expect(() => myError.translate(4)).toThrowError('Unknown error');
});
