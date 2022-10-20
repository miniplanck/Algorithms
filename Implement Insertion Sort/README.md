# Insertion Sort


### Description

The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.

**Instructions:** Write a function `insertionSort` which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.

### Solution:

Check the Solution.js file.

### Solution Breakdown:

In this solution, we start by iterating over the elements in the array. For each element, we consider the sub-array of all the elements that came before it. Then, we search in that sub-array the correct position for our new element. We repeat this strategy until all the elements form a sorted array.
