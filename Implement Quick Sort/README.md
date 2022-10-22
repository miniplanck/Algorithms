# Quick Sort


### Description

Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.

Quick sort is a very efficient sorting method, providing O(nlog(n)) performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.

Instructions: Write a function `quickSort` which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.

### Solution:

Check the Solution.js file.

### Solution Breakdown:

This solution takes advantage of recursion. 

We start by checking whether the input array is empty, in which case we return an empty array (corresponds to the limit condition in the recursion chain). 

If that is not the case, then we must divide the elements in three separate arrays: one that contains values less than the pivot, another with values equal to the pivot and, finally, the remaining values. So as to choose the pivot, we generate a random number (which, in practice, should speed up the convergence of the algorithm).

Finally, we join the resulting values in a sorted array, in which the left and right sub-array must be sorted by systematically calling the same function, recursively.
