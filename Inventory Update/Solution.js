// Inventory Update

function updateInventory(arr1, arr2) {
    //Create dictonary with old inventory
    let dic1 = arr1.reduce((dic,element)=>{
        dic[element[1]] = element[0];
        return dic; 
    },{})

    //Update inventory
    for(let fresh of arr2){
        if(!dic1.hasOwnProperty(fresh[1])){
            dic1[fresh[1]] = fresh[0];
        }
        else{
            dic1[fresh[1]] += fresh[0];
        }
    }

    let finalArr = [];

    //Create final list
    for(let el in dic1){
        finalArr.push([dic1[el], String(el)])
    }

    //Sort final list
    finalArr = finalArr.sort((a,b)=>{
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    })

    console.log(finalArr)
    return finalArr;
}
