const DumbIterator = require('./DumbIterator');

// A decorator to add FizzBuzz to an iterator. Uses the memoization technique to avoid
// reccalculation.
class FizzBuzzDecorator {
  constructor() {
    this.iterator = new DumbIterator();
  }
  
  getFizzBuzz(number) {
    let output = '';
    if (number % 3 === 0) {
      output += 'Fizz';
    }
    if (number % 5 === 0) {
      output += 'Buzz';
    }
  
    if (output.length > 0) {
      return output;
    }
  
    return number
  }
  
  run(from, to) {
    let result = [];
    let range = this.iterator.run(from, to);
    let output = '';
    let fizzbuzz = '';
    
    for (let n of range) {
      let item = 
          {
            number: n,
            fizzbuzz: this.getFizzBuzz(n)
          };
      
      result.push(item);
    }
    return result;
  }
}

module.exports = FizzBuzzDecorator;