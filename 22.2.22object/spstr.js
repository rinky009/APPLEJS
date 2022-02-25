const myName='shikha';
function spellName(a,b,c){
    return a+b+c;
}
console.log(spellName(...myName));
console.log(spellName(...myName[3]));
console.log(spellName([...myName]));
console.log(spellName({...myName}));
