const FizzBuzzDecorator = require('../FizzBuzzDecorator');

describe('FizzBuzzDecorator object', () => {
  it('should return the fizzbuzzbility of a range of numbers', () => {
    const fizzBuzz = new FizzBuzzDecorator();
    
    const batch1 = fizzBuzz.run(3, 5);
    expect(batch1).toEqual(
      [
        {
          number: 3,
          fizzbuzz: 'Fizz'
        },
        {
          number: 4,
          fizzbuzz: 4
        },
        {
          number: 5,
          fizzbuzz: 'Buzz'
        }
      ]
    );
    
    const batch2 = fizzBuzz.run(6, 15);
    expect(batch2).toEqual(
      [
        {
          number: 6,
          fizzbuzz: 'Fizz'
        },
        {
          number: 7,
          fizzbuzz: 7
        },
        {
          number: 8,
          fizzbuzz: 8
        },
        {
          number: 9,
          fizzbuzz: 'Fizz'
        },
        {
          number: 10,
          fizzbuzz: 'Buzz'
        },
        {
          number: 11,
          fizzbuzz: 11
        },
        {
          number: 12,
          fizzbuzz: 'Fizz'
        },
        {
          number: 13,
          fizzbuzz: 13
        },
        {
          number: 14,
          fizzbuzz: 14
        },
        {
          number: 15,
          fizzbuzz: 'FizzBuzz'
        }
      ]
    );
  });
});