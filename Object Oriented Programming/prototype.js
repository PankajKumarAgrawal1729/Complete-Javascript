let myName = "Pankaj     ";



let myHero = ["naruto", "jiraya"];

let heroPower = {
    naruto: "shadow clone",
    jiraya: "sage mode",
    
    getNarutoPower: function () {
        console.log(`Naruto power is ${this.naruto}`);
    }
}

Object.prototype.pankaj = function () {
    console.log("Pankaj is present in all object");
}
heroPower.pankaj();
myHero.pankaj();

Array.prototype.heyPankaj = function () {
    console.log("Hello Pankaj");
}

myHero.heyPankaj();
// heroPower.heyPankaj(); // error no access


// inheritance
const User = {
    name: "Pankaj",
    email: "pankaj@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User;

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
myName.trueLength();