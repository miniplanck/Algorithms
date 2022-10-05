function binarySearch(searchList, value) {
  let arrayPath = [];
  let testArr = searchList.slice();

  while(testArr.length != 0){
    let mid = Math.floor(testArr.length/2)+(-1+testArr.length%2);

    if(testArr[mid] == value){
      arrayPath.push(value);
      return arrayPath;
    }
    else{
      arrayPath.push(testArr[mid]);
      let [h1, h2] = [testArr.slice(0,mid),testArr.slice(mid+1,)]

      if(mid < value){
        testArr = h2; 
      }
      else{
        testArr = h1;
      }
    }
  }
  return "Value Not Found"
}
