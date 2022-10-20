# Implement Bubble Sort


### Description

The bubble sort method starts at the beginning of an unsorted array and 'bubbles up' unsorted values towards the end, iterating through the array until it is completely sorted. It does this by comparing adjacent items and swapping them if they are out of order. The method continues looping through the array until no swaps occur at which point the array is sorted.

This method requires multiple iterations through the array and for average and worst cases has quadratic time complexity. While simple, it is usually impractical in most situations.

**Instructions:** Write a function `bubbleSort` which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

### Solution:

Check the Solution.js file.

### Solution Breakdown:

As the descriptions hints, we must iterate over the same array several times until there are now swaps: only then do we get a sorted array. 

Thus, a `while` cycle is used, together with a `swap` variable which records the number of swaps that occur during the cycle through an array.

For each cycle, we check whether the current element is greater or lower than its right neighbour: if that is the case, then they are swapped and the `swap` variable is incremented. This is repeated until the `while` cycle breaks.

Finally, we return the sorted array.
