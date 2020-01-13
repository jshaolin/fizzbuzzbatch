const DumbIterator = require('../DumbIterator');

describe('DumbIterator object', () => {
  it('should iterate over a range of numbers', () => {
    const iterator = new DumbIterator();
    const result = iterator.run(3, 5);
    
    expect(result).toEqual([3, 4, 5]);
    
  });
});