function bubbleSort(array){
     let swap;
     do {
       swap = false;
       for (let i = 0; i < array.length; ++i) {
         if (array[i] > array[i+1]) {
           [array[i], array[i+1] = [array[i+1, array[i]]];
           swap = true;
         }
       }
     } while (swap == true)
     return array;
}
module.exports = bubbleSort;
