//In ES6 without using super(),you can extend the properties of parent into child

class Father{
        city='RNC';
getAddress(){
return` from city ${this.city}`;
}
}
class Boy extends Father{
    constructor(name,age,city){
         super(city);
        this.name='sunny';
        this.age=22;
        this.city='RNC';
    }
getFatherAdd(){
    return`${this.name} is from city ${this.city}`;
}
}
const childOne=new Boy();
console.log(childOne.getFatherAdd());
console.log(childOne);
