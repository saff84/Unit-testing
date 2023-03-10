import { health } from '../health';

test('test error', () => {
  const person = { name: 'Маг', health: 102 };
  const result = health(person);
  expect(result).toBe('Ошибка, здоровье не может быть больше 100');
});

test('test healthy', () => {
  const person = { name: 'Маг', health: 90 };
  const result = health(person);
  expect(result).toBe('healthy');
});

test('test wounded', () => {
  const person = { name: 'Маг', health: 48 };
  const result = health(person);
  expect(result).toBe('wounded');
});

test('test critical', () => {
  const person = { name: 'Маг', health: 14 };
  const result = health(person);
  expect(result).toBe('critical');
});
