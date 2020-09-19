//Write a function called “printAllValues” which returns an newArray of all the input object’s values.
var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 val =[]
 for(item in obj){
     val.push(obj[item])
 }
 return val
}

//console.log(printAllValues(obj))

//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.
function printAllKeys(obj){
    k =[]
    for(item in obj){
        k.push(item)
    }
    return k
}
//console.log(printAllKeys(obj))

//Write a function called “convertObjectToList” which converts an object literal into an array of arrays.