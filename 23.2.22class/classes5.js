//using  for multiobject
class student{
    constructor(name,age)
{
    this.studentName=name;
    this.studentAge=age;
    console.log('construction function');
}
//using prototype method
hello() 
{
    console.log(`Hello\n ${this.studentName} \n my age is ${this.studentAge}`);
}
hellob(){
console.log(`Hello\n ${this.studentName} \n your age is ${this.studentAge}`);
  }
}

let a=new student('Shikha Rani',27);
a.hello();
let b=new student('Geeta Kumari', 31);
b.hellob();