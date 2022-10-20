// Find the Symmetric Difference

function sym(...args) {

  //Remove repeated values
  args = args.map(element => {
    return [...new Set(element)]
  })

  //Function which applies binary op
  function binop(arr1, arr2) {

    
  let final = [];

    arr1.map(element => {
      if(!arr2.includes(element)){
        final.push(element)
      }
    });

    arr2.map(element => {
      if(!arr1.includes(element)){
        final.push(element)
      }
    })


   return final
  }

  let arg1 = args[0];

  //Apply binop in pairs
  for(let i = 1; i<args.length; i++){
    arg1 = binop(arg1, args[i]);
  }

  return arg1
}
