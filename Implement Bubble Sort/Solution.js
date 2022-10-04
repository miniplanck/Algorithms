function bubbleSort(array) {
  //Flag which tells us if there are swaps
  let swap = 1;
  
  //Change array while there are no swaps
  while(swap != 0){
    swap = 0;
    for(let i = 0; i<array.length-1;i++){
      if(array[i]>array[i+1]){
        [array[i], array[i+1]] = [array[i+1], array[i]];
        swap += 1;
        }
      }
    }
  return array;
}
