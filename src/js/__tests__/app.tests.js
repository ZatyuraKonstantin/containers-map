import ErrorRepository from '../app';

test('unknown error', () => {
  const errors = new ErrorRepository();
  const code = 200;
  expect(() => errors.translate(code)).toThrow('Unknown error');
});

test.each([
  [400, 'Bad request'],
  [401, 'Unauthorized'],
  [403, 'Forbidden'],
  [404, 'Not Found'],
])('all known errors', (code, expectedResult) => {
  const errors = new ErrorRepository();
  expect(errors.translate(code)).toEqual(expectedResult);
});