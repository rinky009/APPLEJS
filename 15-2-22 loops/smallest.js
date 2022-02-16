//Find the smallest number is array
let arr=[14,41,9,6,90,45,37];
let smallest=arr[0];
for(let i=0;i<arr.length;i++){
    if(arr[i]<=smallest){
        smallest=arr[i];
    }
}
console.log(smallest);