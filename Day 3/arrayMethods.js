//1) Print all odd numbers in an array
var odd = (arr) => {
    arr1=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 != 0){
            arr1.push(arr[i])
        }
    }
    return(arr1);
}
console.log(odd([1,3,5,2,4,3]));


//2)Convert lowercase string to all caps
var caps = (str) => {
    str1 =[]
    for(let i=0; i<str.length; i++){
    var up = str[i].toUpperCase()
    str1.push(up)
    }
     return str1
}
console.log(caps(["cat", "bat", "dog"]));

//sum of all numbers in an array
nums = [1,2,3,4,5]
var sum = nums.reduce((item,sum)=>{
return item+sum
},0)
console.log(sum);

//All Prime numbers in an array
var isPrime = (num) => {
    for(let i=2; i<num; i++){
        if(num%i==0)
        return false
    }
    return true
}

var allPrime = (x)=>
{
    x1 = []
    for(let i=0; i<x.length; i++){
        if(isPrime(x[i])){
            x1.push(x[i])
        }
    }
    return x1;
}
console.log(allPrime([4,5,6,7,8]));

//Return all palindromes in an array
var isPalindorome = (y) => {
    yr = y.split('').reverse().join('')
    if(y===yr){
        return true
    }
    return false
}
var array= ["lil", "sos","system"]
array2 =[]
for(let i=0; i<array.length; i++){
    if(isPalindorome(array[i]))
    array2.push(array[i]);
}
console.log(array2)
