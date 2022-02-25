const person={
    fName:'Riya',
    lName:'kumari',
    age:20,
    gender:'female',
    city:'Delhi',
    ispassed:true,
    fullName:function(){
        return`full name is ${this.fName}${this,lName}`
    }
}
console.log(person);
for(let i in person)
{
    //console.log(`key is:${i}`);
    console.log(`value is:${person[i]}`);
}