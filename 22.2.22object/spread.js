//deep copy in object using spread operator...
const arr1=[1,2,3];
let arr2=[...arr1];
console.log(arr1);
console.log(arr2);
arr2.push(4);
console.log(arr1);
console.log(arr2);