const assert = require('chai').assert;
const bubbleSort = require('../bubbleSort');

describe('bubble sort functionality', function(){
  it('can sort an array in ascending order', function(){
    nums = [2, 5, 3, 1, 4, 7, 8, 6, 9]
    expectedNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    assert.deepEqual(bubbleSort(nums), expectedNums)
  });
});
