//filter
const arr=[3,2,9,8,5,6,3];
const result=arr.filter((num,index,array)=>{
    return num>5;
})
console.log(result);