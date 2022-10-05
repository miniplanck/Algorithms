function selectionSort(array) {
  for(let i = 0; i<array.length; i++){
    let min = array[i];
    let minPos = i;
    for(let j = i; j<array.length; j++){
      if(array[j] < min){
        minPos = j;
        min = array[minPos]
      }
    }
    [array[i], array[minPos]] = [array[minPos], array[i]]
  }
  return array;
}
