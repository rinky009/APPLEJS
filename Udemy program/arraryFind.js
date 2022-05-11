const users = [{
    name: 'Adi',
    age: 27
   },{
    name: 'Golu',
    age: 72
   },{
    name: 'Sima',
    age: 45
   }]
   const user = users.find((user) => user.name === 'Sima')
   console.log(user) // Will print the second object in the array