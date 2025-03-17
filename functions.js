function greet1(){
   console.log('hello world');
}

greet1();


function greet2(name){
    console.log('hello '+ name);
 }
 
 greet2('sruti');
//here sruti is called as an argument in this function

function greet(name, lastName){
    console.log('hello '+ name + ' '+ lastName);
 }
 
 greet3('sruti', 'dash');

 function greet3(name) {
    console.log('hello ' + name);
}

greet3('sruti');  // hello sruti
greet3('dash');   // hello dash

//function calculating value :

function square(number){
    return number*number;
}

let number = square(4);
console.log(number);

//or

function square(number1) {
    return number1 * number1;
}

console.log(square(4));  // 16
console.log(square(7));  // 49
console.log(square(10)); // 100

//addition

function add(a,b){
    return a+b;
}

let result = add(5,3)
console.log(result);

//multiplication

function multiply(x,y){
    return x*y;
}

let result2 = multiply(4,3);
console.log(result2);

//uppercase

function toUpperCaseString(str){
    return str.toUpperCase();
}

let result3 = toUpperCaseString("sruti");
console.log(result3);

//lowercase

function toLowerCaseString(str1){
    return str1.toLowerCase();
}

let result4 = toLowerCaseString("SRUTI")
console.log(result4);

//length of string

function lengthOfTheString(str2){
    return str2.length;
}
let result5 = lengthOfTheString('SRUTI DASH');
console.log(result5);

//area of the circle

function areaOfTheCircle(radius){
    return (Math.PI*radius*radius);
}

let result6 = areaOfTheCircle(3);
console.log(result6);

//first name and last name

function fullName(firstName, lastName){
    return (firstName + ' ' + lastName);
}

let result7 = fullName('Sruti', 'Dash');
console.log(result7);


//subtraction

function subtraction(a,b){
    return a-b;    
}

let result8 = subtraction(10,6);
console.log(result8) ;

//reverse string

function reverseName(str){
    return str.split('').reverse().join('');
}

let result9 = reverseName('Sruti');
console.log(result9);

function fivePlusTwo(f,g){
    return f+g;
}

let sum5 = fivePlusTwo(5,2);
console.log('Five plus two is ' + sum5);