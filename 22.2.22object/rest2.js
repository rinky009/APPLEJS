let fruits=function(message,...fruits){
    console.log(message);
    for(let i in fruits){
        console.log(fruits[i]);
    }
}
let message='list of fruits';
fruits(message,'apple');
fruits(message,'apple','banana');