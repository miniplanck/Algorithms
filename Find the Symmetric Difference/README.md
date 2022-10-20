# Find the Symmetric Difference

### Description

The mathematical term symmetric difference (`△` or `⊕`) of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets `A = {1, 2, 3}` and `B = {2, 3, 4}`, `A △ B = {1, 4}`.

Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (`A △ B △ C`), you must complete one operation at a time. Thus, for sets `A` and `B` above, and `C = {2, 3}`, `A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}`.

Create a function that takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

### Solution:

Check the Solution.js file.

### Solution Breakdown:

Our proposed solution starts by removing the repeated elements in each of the arrays in the input, by implementing the `Set` object. Then, we present the binary operator function.

The previous function takes two elements and returns its symmetric difference. First, we create a `final` array which holds the unique values. Then, we search for the elements in `arr1` which are not in `arr2` and vice-versa. The resulting array should contain the symmetric difference.

Finally, we apply this binary operation for each pair of values in the input array of arrays.

