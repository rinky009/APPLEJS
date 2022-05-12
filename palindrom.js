let value="123215";
const revValue=()=>{
    let myRevVal=value.toString().split("").reverse().join("");
    let mystrVal=value.toString();
    if(mystrVal==myRevVal){
        console.log("palindrom");
    }
    else{
        console.log("not a palindrom")

    }
}
revValue();