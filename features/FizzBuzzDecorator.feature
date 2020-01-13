Feature: Produces a FizzBuzz batch
  Decorates a dumb iterator to add FizzBuzz capability
 
  Scenario: run of 3 5 to equal [{number: 3, fizzbuzz: fizz}, {number: 4, fizzbuzz: 4}, {number: 5, fizzbuzz: Buzz}]
    Given 3 5
    When run
    Then The result is [{number: 3, fizzbuzz: fizz}, {number: 4, fizzbuzz: 4}, {number: 5, fizzbuzz: Buzz}]