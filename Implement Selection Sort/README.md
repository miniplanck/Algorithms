# Implement Selection Sort


### Description

Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

**Instructions:** Write a function `selectionSort` which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

### Solution:

Check the Solution.js file.

### Solution Breakdown:

There isn't much to this solution that is not already explained in the description.

For each value in the array, we consider the sub-array composed of said element and all that come after it; in each iteration of the cycle, we run a `for` loop which searches for the minimum value. When found, it is swapped by the first element of that sub-array.

In the end, a sorted array is determined.
