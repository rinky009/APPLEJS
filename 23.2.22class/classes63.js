class student{
    constructor(name)
{
    this.studentName=name;
    console.log('construction function');
}
//using prototype method
hello() 
{
    console.log(`Hello ${this.studentName}`);
}
}
let a=new student('Shikha Rani');
a.hello();
