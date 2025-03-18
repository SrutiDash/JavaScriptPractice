//note :
//use ctrl + l to clear  the console

//1.variables

console.log('Hello World!');
let name = 'sruti';
console.log(name);

let firstName = 'sruti';
let lastName = 'dash';
console.log(firstName+' '+lastName);

//2.constants

let interestRate = 0.8;
console.log(interestRate)
interestRate = 2;
console.log(interestRate);

const interestRate2 = 4;
console.log(interestRate2)
//this will cause error
// interestRate2 = 5;
// console.log(interestRate2);

//3.primitive types

let name2 = 'sruti'; //string literal
let age = 24; //number literal
let isApproved = false; //boolean literal
let job = undefined;
let jobRole = null;


//dynamic typing

const pet = 'dog';
let colorCode = 'red';

//in console
//use :
//typeof colorCode
//you will get string
//reassign colorCode with different literal like number
//eg :
// colorCode = 2
// then press enter 
// again you type typeof colorCode you'll het number
// but in case of pet it wont happent as we have assigned pet with const which is a constant and 
// it wont change its value rather if you'll try to chnage its literal you'll get error

// typeof job
// 'undefined'
// typeof jobRole
// 'object'

//arithmetic operators :

let sum = 7+5;
console.log(sum);
let power = 2**3;
console.log(power);

//comparision coperator 

console.log(5 == "5");  // true (only value check)
console.log(5 === "5"); // false (value + type check)

//if else 

let age2 = 20;
if (age2 >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


//switch

let pot = 'yellow';
switch(pot){
    case 'yellow' :
        console.log('Color is yellow');
        break;
    case 'red' :
        console.log('color is red') ;
        break;
    default :
        console.log('unknown color');       
}

for(let i=1; i<=4; i++){
    console.log(i);
}

let i=4;
while(i<=6){
    console.log(i);
    i++;
}

let accountId = 4353
var accountname = 'sruti'
accountId = 3424
accountname = 'wefrfr'
account = 1343
account = 3243
console.log([accountId, accountname, account]);

// alert(3+3)

//we are using node now not consodle

