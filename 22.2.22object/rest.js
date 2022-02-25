//rest opertor is also denoted by ...
//rest operator catchs all the arguements as an array
const functionOne=(...args)=>{
    console.log(args);
    return args.sort((a,b)=>b-a)[3];
}
console.log(functionOne(1,2,3,4,5,6));