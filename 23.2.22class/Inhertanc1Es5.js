class Father{
    constructor(name,age,city){
        this.name=name
        this.age=age;
        this.city=city;
    }
getAddress(){
return`${this.name}is from city ${this.city}`;
}
}
class Boy extends Father{
    constructor(name,age,city){
        super(name,age,city);
    }
getFatherAdd(){
    return`${this.name} is from city ${this.city}`;
}
}
const childOne=new Boy('sunny',45,'Goa');
console.log(childOne.getFatherAdd());
console.log(childOne);
