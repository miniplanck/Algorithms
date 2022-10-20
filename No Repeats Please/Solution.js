// No Repeats Please

function permAlone(str) {

  //Split into chars
  let chars = str.split("");
  let perms = [];

  //Apply Heap's Algorithm
  function heapsAlg(n, arr){
    if(n === 1){
      perms.push(arr.slice().join(''))
      return;
    }

    heapsAlg(n-1,arr)

    for (let i = 0; i < n-1; i++){
      if(n%2 === 0){
        [arr[n-1],arr[i]] = [arr[i],arr[n-1]];
        }
      else {
        [arr[0],arr[n-1]]=[arr[n-1],arr[0]];
        }
      heapsAlg(n-1,arr)
      }
    }
  
  heapsAlg(chars.length, chars);

  //Filter using RegEx
  

  let finalPerms = perms.filter(el => {
    let regex = /(.)\1/i
    return (!regex.test(el) === true)  
  })

  return finalPerms.length;
}
