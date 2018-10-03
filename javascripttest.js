//import {name} from './import.js'
var person = require ('./import2');

var myName = "Jared";

console.log(myName);

var myName = "Laura";

console.log(myName);



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