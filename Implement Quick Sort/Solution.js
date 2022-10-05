function quickSort(array) {
  if(array.length === 0){
    return [];
  }
  else{
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let rand = Math.floor(Math.random()*array.length);

    for(let i = 0; i<array.length; i++){
      if(array[i]<array[rand]){
        arr1.push(array[i])
      }
      else if(array[i] == array[rand]){
        arr2.push(array[i])
      }
      else{
        arr3.push(array[i])
      }
    }
    return [...quickSort(arr1), ...arr2, ...quickSort(arr3)]
  }
}
