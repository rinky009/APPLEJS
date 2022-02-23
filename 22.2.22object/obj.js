//object are also a data structure

const person={
    fName:'shikha',
    lName:'Rani',
    age:29,
    gender:'female',
    city:'Ranchi',
    isPassed:true,
    fullName:function(street){
    return`full name is ${this.Name}${this.Name}from ${street}`;
}
}
/*console.log(person);
console.log(person.fName);
console.log(person.fullName(`chowk`));
console.log(person.age);
console.log(person['city']);
console.log(person.isPassed);
delete person.gender
person.pincode=560087;
console.log(person.pincode);*/

//traversing through array ,i can access both keys and values of objects
for(let i in person){
    //console.log(`key is:${i}`);
    console.log(`value is:${ person[i]}`);
}