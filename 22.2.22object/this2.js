//In a method this refer to the ower object
const name1={
    fName:'shikha',
    lName:'Rani',
    sum:function(){
        var add=2+2;
    console.log(`sum of two no. is ${add}`);
    console.log(this);    
    }
}
name1.sum();