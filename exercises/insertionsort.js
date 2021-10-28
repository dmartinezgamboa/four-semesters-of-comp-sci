/* FIRST TRY OR DIE. GOT IT 
  Insertion sort! 
  
  Be sure to call your function insertionSort.
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
*/

var nums1 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
var nums2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function insertionSort (unsortedNums) {
    let sortedNums = [];
    for (i in unsortedNums) {
        let j = 0;
        while (unsortedNums[i] > sortedNums[j]) {
            j++;
        }
        sortedNums.splice(j, 0, unsortedNums[i]);
    }
    return sortedNums;
}

console.log(insertionSort(nums1));
console.log(insertionSort(nums2));
console.log(insertionSort(nums3));