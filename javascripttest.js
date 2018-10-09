//import {clean} from './import3.js';

var person = require ('./import2');

var cat = require('./import3');

var myName = "Jared";

console.log(myName);

var myName = "Laura";

console.log(myName);
 
class Human {
    constructor() {
        this.gender = 'female';
    }
    printGender() {
        console.log(this.gender);
    }
}

class PersonName extends Human {
    constructor () {
        super();
        this.name = "Ruby";
    }
    printMyName(){
        console.log(this.name);
    }
}
const personName = new PersonName();
personName.printMyName();
personName.printGender();

const myDaughter = () => {
    let myDName = "Georgie";

    console.log(myDName);

}
function printMyName(name) {
    console.log(name);
}
const printMyOtherName = (otherName) => {
    console.log(otherName);
}
function mySon() {
    const mySName = "Abel";

    console.log(mySName);
}

mySon();
myDaughter();
printMyName('Henry');
printMyOtherName('Mark');
printMyOtherName(person);
printMyOtherName(cat);