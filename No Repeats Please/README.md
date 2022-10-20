# No Repeats Please

### Description

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (`aab`, `aab`, `aba`, `aba`, `baa`, `baa`), but only 2 of them (`aba` and `aba`) don't have the same letter (in this case `a`) repeating.

### Solution:

Check the Solution.js file.

### Solution Breakdown:

In order to solve this problem, we must first determine all the permutations of the elements in the provided string: to do so, we split it and apply [Heap's Algorithm](https://en.wikipedia.org/wiki/Heap%27s_algorithm). Each permutation is recorded in the `perms` array.

Finally, we filter each element in the string using the RegEx `/(.)\1/i`, which makes use of grouping and referencing, to remove permutations with consecutive similar letters.

