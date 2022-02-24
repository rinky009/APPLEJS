class student{
    constructor(name,age,cls){
        this.myname=name;
        this.myage=age;
        this.mycls=cls;
    }
    biodata(){
        return`hi,my name is  ${this.myname}.\n I am ${this.myage} years old and I am in class ${this.mycls}.`;
    }
}
let studentOne=new student('shikha',28,'MCA');
let studentTwo=new student('sita',22,'BCA');
console.log(studentOne.biodata());
console.log(studentTwo.biodata());