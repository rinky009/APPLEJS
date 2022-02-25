const myVehicle={
    brand:'ford',
    model:'mustang',
    color:'red',
}
const updateMyVehicle={
    type:'car',
    year:2021,
    color:'yellow',
}
const myUpdatedVehicle={...myVehicle,...updateMyVehicle}

console.log(myUpdatedVehicle);
for(let i in myVehicle){
    //console.log(`key is :${i}`);
    console.log(`value is ${myVehicle[i]}`)
}