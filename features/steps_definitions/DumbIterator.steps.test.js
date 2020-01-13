let { defineFeature, loadFeature } = require('jest-cucumber');
const DumbIterator = require('../../DumbIterator');

const feature = loadFeature('./features/DumbIterator.feature');

defineFeature(feature, test => {
  test('run of 3 5 to equal [3, 4, 5]', ({ given, when, then }) => {
    let x;
    let y;
    let z;
    let iterator = new DumbIterator();
    
    given('3 5', () => {
      x = 3;
      y = 5;
    });
    
    when('run', () => {
      z = iterator.run(x, y);
    });
    
    then('The result is [3, 4, 5]', () => {
      expect(z).toStrictEqual([3, 4, 5]);
    });
  });
});