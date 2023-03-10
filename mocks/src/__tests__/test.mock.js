import http from '../http';
import { getLevel } from '../index';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});
test('get level status OK', () => {
  http.mockReturnValue({
    status: 'ok',
    level: '2',
  });
  const result = getLevel(1);
  expect(result).toEqual('Ваш текущий уровень: 2');
});

test('get level status not OK', () => {
  http.mockReturnValue({
    status: '',
    level: '2',
  });
  const result = getLevel(1);
  expect(result).toEqual('Информация об уровне временно недоступна');
});
