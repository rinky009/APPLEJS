//In a regular function this refer to the globle object

function sum(){
    let add=2+2;
    console.log(`sum of two number is ${add}`);
    console.log(this);
}
sum();