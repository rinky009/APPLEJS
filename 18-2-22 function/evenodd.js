const evenOdd=(num)=>{
    if(num%2===0){
        return 'EVEN';
    }
    else{
        return 'Odd';
    }
}
const result=evenOdd(45);
console.log(`Given number is:${(result)}`);