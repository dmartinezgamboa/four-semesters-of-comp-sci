var nums1 = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
var nums2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
var nums3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function quickSort (unsortedNums) {
    let sortedNums = [];
    // base case
    if (unsortedNums.length <= 1) {
        return unsortedNums;
    }
    // recursion case
    else {
        let pivot = unsortedNums[unsortedNums.length-1]
        let left = [];
        let right = [];
        for (let i = 0; i < unsortedNums.length - 1; i++) {
            // if smaller
            if (unsortedNums[i] < pivot) {
                left.push(unsortedNums[i]);
            } else { // if larger
                right.push(unsortedNums[i]);
            }
        }
        // return
        return sortedNums
            .concat(quickSort(left), pivot, quickSort(right));
    }
}

console.log(quickSort(nums1));
console.log(quickSort(nums2));
console.log(quickSort(nums3));