const personOne=(friend,callfrnd)=>{
    console.log(`I am busy right now.\nI am talking to ${friend}.\nI will call you back.`);
callfrnd();
}
const personTwo=()=>{
    console.log(`Hey what's up.\n I call you back.`)
}
//personOne('Shikha',personTwo);
personOne('shikha');
personTwo(callfrnd());