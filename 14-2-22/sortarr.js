// eg on sort
const strArr=['hi','atom','boy','culture','anmol'];
console.log(strArr.sort());
const numArr=[1,12,8,54,9,5];
console.log(numArr.sort(function(a,b)
{
    return b-a;
}));
const numArrTwo=[1,12,'atom','aa','hello',3,45,9,5];
console.log(numArrTwo.sort());
