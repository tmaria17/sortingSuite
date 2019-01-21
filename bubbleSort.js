function bubbleSort(array){
    let swap;
     do {
       swap = false;
       for (i = 0; i < array.length; ++i) {
         if (array[i] > array[i+1]) {
           [array[i], array[i + 1]] = [array[i + 1], array[i]];

           swap = true;
         }
       }
     } while (swap == true)
     return array;
}
module.exports = bubbleSort;
// nums = [3,2,5,4,1]
// console.log(bubbleSort(nums))
