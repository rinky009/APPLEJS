// The age property has been destructured and stored in age.
//The location property has also been destructured and stored in address'

const user = {
    name: 'Deep',
    age: 27,
    location: 'Delhi'
   }
   // The line below uses destructuring
   const { name,age, location:address } = user
   console.log(name)
   console.log(age)
   console.log(address)