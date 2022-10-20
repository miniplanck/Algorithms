// Pairwise

function pairwise(arr, arg) {
  let sum = 0;
  let used = {};

  for (let i = 0; i<arr.length-1; i++){
    for (let j = i+1; j<arr.length; j++){
      if (arr[i]+arr[j] == arg){
      
        //Adds used indexes to the "used" object
        if(!used.hasOwnProperty(i) && !used.hasOwnProperty(j)){
          used[i] = true;
          used[j] = true;
        }
        else {
          continue;
        }
        sum += i+j
      }
    }
  }

  return sum;

}
