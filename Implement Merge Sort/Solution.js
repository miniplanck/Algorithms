function merge(arr1, arr2){
  let combined = [];
  while(arr1.length != 0 || arr2.length != 0){
    if(arr1.length === 0){
      combined = [...combined, ...arr2];
      arr2 = [];
    }
    else if(arr2.length === 0){
      combined = [...combined, ...arr1];
      arr1 = [];
    }
    else{
      if(arr1[0] <= arr2[0]){
        combined.push(arr1[0]);
        arr1.shift();
      }
      else{
        combined.push(arr2[0]);
        arr2.shift();
      }
    }
  }
  return combined
}


function mergeSort(array) {
  // Only change code below this line
  if(array.length === 1){
    return array;
  }
  else{
    let [arr1, arr2] = [array.slice(0,array.length/2), array.slice(array.length/2,)]

    return merge(mergeSort(arr1), mergeSort(arr2));
  }
  // Only change code above this line
}
