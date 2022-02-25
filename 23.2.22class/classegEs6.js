// In Es6 defining construtor is not mandatary,this keywords is also not mandotry while defining parameters
class person{
    name='Geeta'
    age= 32
    city='Ranchi'
getAddress(){
return`${this.name} is from city ${this.city}`;
}
}
const personOne=new person();
const personTwo=new person();
personOne.pincode=3466778;
//delete personOne.name;
console.log(personOne);
console.log(personTwo);
