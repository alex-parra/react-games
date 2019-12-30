import secondsToHms from './secondsToHms';

it('Converts seconds less than 1 minute', () => {
  expect(secondsToHms(59)).toBe('00:00:59');
});

it('Converts seconds above 1 minute', () => {
  expect(secondsToHms(69)).toBe('00:01:09');
});

it('Converts seconds above 1 hour', () => {
  expect(secondsToHms(3601)).toBe('01:00:01');
});

it('Converts seconds below 24 hours', () => {
  expect(secondsToHms(86341)).toBe('23:59:01');
});

it('Converts seconds above 24 hours', () => {
  expect(secondsToHms(86401)).toBe('24:00:01');
});

it('Converts seconds above 2 days', () => {
  expect(secondsToHms(172801)).toBe('48:00:01');
});
