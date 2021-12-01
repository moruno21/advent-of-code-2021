import { sonarSweep } from './sonar-sweep';

test('No increments', () => {
  expect(sonarSweep([100, 122, 130, 90])).toBe(0);
});

test('1 increment with 2 windows', () => {
  expect(sonarSweep([100, 122, 130, 200])).toBe(1);
});

test('1 increment with 3 windows', () => {
  expect(sonarSweep([100, 122, 130, 200, 80])).toBe(1);
});

test('2 increments with 3 windows', () => {
  expect(sonarSweep([100, 122, 130, 200, 130])).toBe(2);
});

test('2 increments with 4 windows', () => {
  expect(sonarSweep([100, 122, 130, 200, 130, 90])).toBe(2);
});

test('3 increments with 4 windows', () => {
  expect(sonarSweep([100, 122, 130, 200, 130, 150])).toBe(3);
});
