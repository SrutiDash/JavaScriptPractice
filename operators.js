//types of operators :
//AABCL

// ARITHMETIC
// ASSIGNMENT
// BITWISE
// COMPARISION
// LOGICAL

let x = 6
let y = 7

console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);

//remainder
console.log(x%y);

//power
console.log(x**y);

//these are increment and decrement operators

//increment(++)
console.log(x);
console.log(++x); 
//incremented by 1 first then it will show the x in the console
//now the value of x is 7
console.log(x++); //first print
console.log(x) //then increase
//x in the console first then increment by 1

// decrement(--)
//now the value
console.log(--y); //6
//first decrement then showing in the console

// now the value of y is 6
console.log(y--); //6
console.log(y); //5
//y in the console first then decrement by 1

// Summary Table
// Operator	Execution Order	Effect
// i++	Pehle old value return, phir increase	Post-Increment
// ++i	Pehle increase, phir new value return	Pre-Increment
// i--	Pehle old value return, phir decrease	Post-Decrement
// --i	Pehle decrease, phir new value return	Pre-Decrement

//assignment operator :

let a = 10;
// a = a+5;
// or
// a += 5;
console.log(a+=7); //17
console.log(a*=5); //17*5 = 85
console.log(a**=4); //85 to the power 5 = 52200625
console.log(a-=52200615); //10
console.log(a/=5); //2
console.log(a%2); //0

//comparision operator

let x1 = 8;
console.log(x1>=5);

//strict equality operator
console.log(x1==='8'); //false because '8' is a string where as the 
// type of x1 is number
//equality operator
console.log(x1=='8') // true because 
// it does check the type of variable

//ternary operators 

let points = 90;
let type = points>100 ? 'gold' : 'silver'
console.log(type);

let type2 = points<100 && points>=50 ? 'gold' : points<50 ? 'silver' : 'bronze'
console.log(type2); 


//logical operators

//logical AND (&&)
//when boith operands are true

let income = true;
let creditScore = true;
let loan = income && creditScore;
console.log(loan);

//logical OR (||)

let income2 = false;
let creditScore2 = true;
let loan2 = income2 || creditScore2;
console.log(loan2);

//not operator (!)

let appliactionRefused = !loan
console.log(appliactionRefused); //false

//logical operators

//falsy(false)
//undefined
//null
//0
//false
//''
//NaN(not a number)

//anything that is not falsy is truthy
// false || 1 || 2
// 1
// false || 4 || false
// 4

let color = 'red'
let defaultColor = 'blue'
let userColor = undefined;
let currentColor = color || defaultColor;
let differentcolor = userColor || defaultColor
console.log(currentColor); //red
console.log(differentcolor); //blue as undefined is not a color

//operator precedence

let c = (2+3)*4;
console.log(c);

//swapping :

let d = 'red'
let f = 'blue'
let e = d;
console.log(e);
d = f;
f = e;

console.log(d);
console.log(f);

//or 

[d,f] = [f,d]
console.log(d);
console.log(f);


