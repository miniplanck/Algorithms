function sym(...args) {

  //Remove repeated values
  args = args.map(element => {
    return [...new Set(element)]
  })

  //Function which applies binary op
  function binop(arr1, arr2) {
    //Join lists
    let allVals = arr1.concat(arr2);
    
    //Remove items with more than one occurence
    let dic = allVals.reduce((dic,value)=>{
      if(!dic.hasOwnProperty(value)){
        dic[value] = 1;
      }
      else {
        dic[value] += 1;
      }

      return dic
    },{})

    let final = [];
    //Return elements whose values are not greater than 1
    for(let a in dic){
      if(dic[a] == 1){
        final.push(parseInt(a));
      }
    }

   return final
  }

  let arg1 = args[0];

  //Apply binop in pairs
  for(let i = 1; i<args.length; i++){
    arg1 = binop(arg1, args[i]);
  }

  return arg1
}
