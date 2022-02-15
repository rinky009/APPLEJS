const numArr=[1,9,6,11,45,22,77,44,23,09,71];
console.log(numArr.sort(function(a,b){
    return a-b;
}))
console.log(numArr.sort(function(a,b){
    return b-a;
}))