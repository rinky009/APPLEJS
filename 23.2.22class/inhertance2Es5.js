class Father{
    constructor(city){
        this.city=city;
    }
getAddress(){
return` from city ${this.city}`;
}
}
class Boy extends Father{
    constructor(name,age,city){
        super(city);
        this.name=name;
        this.age=age;
    }
getFatherAdd(){
    return`${this.name} is from city ${this.city}`;
}
}
const childOne=new Boy('sunny',45,'Goa');
console.log(childOne.getFatherAdd());
console.log(childOne);
