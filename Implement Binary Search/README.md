# Binary Search


### Description

Binary search is an **O(log(n))** efficiency algorithm for searching a sorted array to find an element. It operates using the following steps:

  1. Find the middle `value` of a sorted array. If `value == target` return (found it!).
  2. If middle `value < target`, search right half of array in next compare.
  3. If middle `value > target`, search left half of array in next compare.
As you can see, you are successively halving an array, which gives you the log(n) efficiency. For this challenge, we want you to show your work - how you got to the target value... the path you took!

Write a function `binarySearch` that implements the binary search algorithm on an array, returning the path you took (each middle value comparison) to find the target in an array.

The function takes a sorted array of integers and a target value as input. It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value. The target value should be the last element of the returned array. If value not is found, return the string `Value Not Found`.

For example, `binarySearch([1,2,3,4,5,6,7], 5)` would return `[4,6,5]`.

For this challenge, when halving, you MUST use Math.floor() when doing division: `Math.floor(x/2)`. This will give a consistent, testable path.

Note: The following array will be used in tests:

    const testArray = [
      0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
      23, 49, 70
    ];

### Solution:

Check the Solution.js file.

### Solution Breakdown:

This problem is different from the other ones in that, instead of implementing the sorting algorithm, we wish to get the steps it took until reaching the desired result of a search algorithm, if the element is present. If said value is not present, we must return `Value Not Found`.

Our solution consists in considering an array, `testArr`, in which the binary search algorithm is implemented. To do so, we run a while loop that keeps going until the `testArr` is an empty array. If, by this point, no other array is returned, it means that no solution to the problem was found.

In searching for the specified `value`, we take the `testArr` and check if its middle term is equal to `value`: in this case, the `arrayPath`, which contains the path until the solution, is returned. If this is not the case, than we split `testArr` into two halves: if `value` is less than the middle term, then `testArr` is substituted by the leftmost half; the other way around is true if `value` is greater than the middle term.
