const assert = require('chai').assert;
const bubbleSort = require('../bubbleSort');

describe('bubble sort functionality', function(){
  it('is a function', function(){
    assert.isFunction(bubbleSort)
  });
  it('can sort an array in ascending order', function(){
    nums = [10, 2, 5, 3, 1, 4, 7, 8, 6, 9]
    expectedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    assert.deepEqual(bubbleSort(nums), expectedNums)
  });

});
