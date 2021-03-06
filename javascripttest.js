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

// Spread Operators
const array1 = [1,2,3,4]
console.log (array1);
const array2 = [...array1, 6,7]
console.log(array2);
const guy = {
    name: 'Max'
};
const newGuy = {
    ...guy, 
    age: 28
}
console.log(newGuy);

// Rest Operators
const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1,2,3));
// Array Destructuring
[a,b] = ['Hello', 'Georgie']
console.log(a + ' ' + b)
console.log(b)

const numbers = [1, 2, 3];
[num1, , num3] = numbers;
console.log(num1, num3);

// Object Destructuring

// {name} = {name:'Jack',age:24}
// console.log(name)
// console.log(age)

// Reference and Primitive Types
//primitive
const number = 1;
const num2 = number;
// ref (arrays and objects)
const helloperson = {
    name: 'Tony'
};
const secondhelloPerson = { // copy helloperson{} in an imutable way
    ...helloperson
}
helloperson.name = 'Lidia';

console.log('Second Person ' + secondhelloPerson.name);


const car = {
    name: 'Toyota'
};

const secondCar =  
 { 
     ...car
 }
const thirdCar = car;
car.name = 'Ford';

//Array Functions
const numbersArray = [1, 2, 3, 4, 5];

const doubleNumArray = numbersArray.map ((num) => {
    return num * 2;
})

mySon();
myDaughter();
printMyName('Henry');
printMyOtherName('Mark');
printMyOtherName(person);
printMyOtherName(cat); 
console.log(secondCar, car, thirdCar);
console.log(doubleNumArray);
console.log(numbersArray);