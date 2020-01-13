class DumbIterator {
    
  run(from, to) {
    let ret = [];
    
    for (let i = from; i <= to; ++i) {
      ret.push(i);
    }
    
    return ret;
  }
}

module.exports = DumbIterator;