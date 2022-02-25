class student{
    constructor()
{
    let name;
    console.log('construction function');
}
//using prototype method
hello() 
{
    console.log(`Hello ${this.name}`);
}
}
let a=new student();
a.name='Shikha Rani';
a.hello();