//Find the largest number in array
var arr=[3,6,2,56,52,5,89,32];
var largest=arr[0];
for(var i=0;i<=arr.length;i++){
    if(largest<arr[i]){
        largest=arr[i];
       }
} 
console.log(largest);

