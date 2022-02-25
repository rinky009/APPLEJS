//we use classes to define a template
//Es5 syntax
class person{
    constructor(name1,age,city){
        this.name1=name1;
        this.age=age;
        this.city=city;
    }
    getAddress(){
        return`${this.name1} is from city ${this.city}`;
    }
}
const personOne=new person('Reeta',34,'Bang');
const personTwo=new person('Ram',21,'Ranchi');
console.log(personOne);
console.log(personTwo);
