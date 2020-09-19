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
var object = {name: 'ISRO', age: 35, role: 'Scientist'}
function convertObjectToList(obj){
arr=[]
for(item in obj){
    arr.push([item,obj[item]])
}
return arr;
}
//console.log(convertObjectToList(object))

//Parsing a list and transform the first and last elements of it:
//Write a function ‘transformFirstAndLast’ that takes in an array, and returns an object with:
//1) the first element of the array as the object’s key, and
//2) the last element of the array as that key’s value.
var array = ['GUVI', 'I', 'am', 'a geek'];

function transformFirstAndLast(arr){
        var obj = {}
        var k = arr[0]
        var val = arr[arr.length-1]
            obj[k] = val   
         return obj;
}
//console.log(transformFirstAndLast(array))

//Write a function “fromListToObject” which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.
var array1 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr){
    var obj ={}
    for(let i=0; i<arr.length; i++){
        obj[arr[i][0]] = arr[i][1]
    }
    return obj
}
//console.log(fromListToObject(array1))

//Parsing a list of lists and convert into a JSON object:
//Write a function called “transformGeekData” that transforms some set of data from one format to another.
var array2 = [[['firstName', 'Vasanth'], ['lastName', 'Raja'], ['age', 24], ['role', 'JSWizard']], 
[['firstName', 'Sri'], ['lastName', 'Devi'], ['age', 28], ['role', 'Coder']]];
function transformGeekData(arr){
    var transform = []
    for(let i=0; i<arr.length; i++){
        items = arr[i]
        obj ={}
        for(let j=0; j<items.length; j++){
            obj[items[j][0]] = items[j][1]
        }
        transform.push(obj)
    }
    return transform;
}
//console.log(transformGeekData(array2))

//Write an “assertObjectsEqual” function from scratch.
//Assume that the objects in question contain only scalar values (i.e., simple values like strings or numbers).
//It is OK to use JSON.stringify().
//Note: The examples below represent different use cases for the same test.
//In practice, you should never have multiple tests with the same name.
var expected = {foo: 5, bar: 6};
var actual = {foo: 5, bar: 6}
function assertObjectsEqual(actual, expected){
 if(JSON.stringify(actual)==JSON.stringify(expected)){
     return 'Passed'
 }
 return 'FAILED [my test] Expected'+ expected +', but got '+ actual;
}
//console.log(assertObjectsEqual(actual, expected));

//Parsing JSON objects and Compare:
//Write a function to return the list of characters below 20 age

var students = [
    {
    name: 'Siddharth Abhimanyu', age: 21}, { name: 'Malar', age: 25},
    {name: 'Maari',age: 18},{name: 'Bhallala Deva',age: 17},
    {name: 'Baahubali',age: 16},{name: 'AAK chandran',age: 23},  
    {name:'Gabbar Singh',age: 33},{name: 'Mogambo',age: 53},
    {name: 'Munnabhai',age: 40},{name: 'Sher Khan',age: 20},
    {name: 'Chulbul Pandey',age: 19},{name: 'Anthony',age: 28},
    {name: 'Devdas',age: 56} 
    ];
    console.log(returnMinors(students));
   function returnMinors(arr)
   {
    const minors = arr.filter((item)=>{
        return item.age<20
   })
   return minors
}