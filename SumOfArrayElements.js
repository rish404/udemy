function sum(arr){
let result = 0; 
arr.forEach((value) => result += value)
return result;
}

sum([1,2,3,4,5])