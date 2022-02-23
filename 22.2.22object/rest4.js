const myName={fName:'Riya',lName:'kumari'}
const bio={...myName};
myName.fName='Geeta';
console.log(myName);
console.log(bio);