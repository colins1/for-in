import obj1 from '../js/sort';

test('name check < 2', () => {
  expect(obj1).toThrow(obj1);
});

