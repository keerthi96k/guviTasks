//Printing odd numbers in an array

var odd = function(arr){
    arr1=[]
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 != 0){
            arr1.push(arr[i])
        }
    }
    return(arr1);
}
console.log(odd([1,3,5,2,4,3]));


//Convert lowercase string to all caps

var caps = function(str){
    str1 =[]
    for(let i=0; i<str.length; i++){
    var up = str[i].toUpperCase()
    str1.push(up)
    }
     return str1
}
console.log(caps(["cat", "bat", "dog"]));

//sum of all numbers in an array

var sum =function(arr){
    var s = 0;
    for(let i=0; i<arr.length; i++){
        s += arr[i]
    }
    return (s);
}
console.log(sum([1,0,2,4,6,9]));

//All Prime numbers in an array
var isPrime = function(num){
    for(let i=2; i<num; i++){
        if(num%i==0)
        return false
    }
    return true
}

var allPrime = function(x){
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
var isPalindorome = function(y){
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


//Return median of two sorted arrays of same size

var median = function(a){
    if(a.length %2==0){
        med = a.length/2
        return a[med-1]
    }
    else{
        med = (a.length-1)/2
        return a[med]
    }
}

var x = [1,3,5,6,7,8,9]
var y = [4,6,2,3,5,7,11]
var z = x.concat(y)
z.sort(function(a,b){return(a-b)})
console.log(median(z))

//Remove duplicates from an array
var removeDuplicates = function(m){
    m1 =[]
    m.sort(function(a,b){return(a-b)})
    for(let i =0; i<m.length; i++){
        if(m[i]!= m[i+1]){
            m1.push(m[i])
        }
    }
    return m1;
}
console.log(removeDuplicates([1,1,2,3,4,4]))

//Rotate an array by k times and return the rotated array
var shifting = function(shift){
    lastEle = shift.length-1
    nshift = []
    nshift[0] = shift[lastEle]
    for(let i=0; i<shift.length-1; i++){
        nshift.push(shift[i])
    }
    return nshift;
}
var rotate = function(q,k){
    for(let i =0; i<k; i++){
        q = shifting(q)
    }
    return q;
}
console.log(rotate([1,2,3,4,5],3))