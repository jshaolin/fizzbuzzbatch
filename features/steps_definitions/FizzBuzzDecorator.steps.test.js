let { defineFeature, loadFeature } = require('jest-cucumber');
const FizzBuzzDecorator = require('../../FizzBuzzDecorator');

const feature = loadFeature('./features/FizzBuzzDecorator.feature');

defineFeature(feature, test => {
  test('run of 3 5 to equal [{number: 3, fizzbuzz: fizz}, {number: 4, fizzbuzz: 4}, {number: 5, fizzbuzz: Buzz}]', ({ given, when, then }) => {
    let x;
    let y;
    let z;
    let iterator = new FizzBuzzDecorator();
    
    given('3 5', () => {
      x = 3;
      y = 5;
    });
    
    when('run', () => {
      z = iterator.run(x, y);
    });
    
    then('The result is [{number: 3, fizzbuzz: fizz}, {number: 4, fizzbuzz: 4}, {number: 5, fizzbuzz: Buzz}]', () => {
      expect(z).toStrictEqual(
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
    });
  });
});