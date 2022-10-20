# 
Inventory Update


### Description

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in `arr1`). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

### Solution:

Check the Palindrome Solution.js file.

### Solution Breakdown:

This solution takes advantage of a dictionary-like structure for faster search of elements in the original list. 

First, we create a dictionary with all the existing products, which we will compare against the provided list of new products. We cycle through each element and update the corresponding value in the dictionary. 

Finally, we parse the dictionary into an array, which we sort.

