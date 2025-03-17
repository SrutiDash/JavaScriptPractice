//different types of loops
//for loop
// for in loop
// for of loop
// while loop
// do while loop

//for loop

// for(initialExpression; condition; incrementOperator){
//    statement
// }

// for(i=0; i<5; i++){
//    console.log('Hello World', i);
// }

for(i=0;i<5;i++){
   console.log('Hello world', i);
}

// 0
// 1
// 2
// 3
// 4

//print number from 1 to 10 :
//everytime you see i = 0 and it is less than some number n
//then if you're printing i, then it will print fro  0 to n-1.
//eg : if i=0, i<100 : it will print from 0 to (100-1) that is 99.

for(i=0;i<10;i++){
   console.log(i+1);
}

//program to add first 5 natural numbers :

console.log('First 5 natural numbers are : ')
for(i=0;i<5;i++){
   console.log(i+1);
}

//printing even numbers from 1 to 10

console.log('Even numbers from 1 to 10 are : ')
for(i=2;i<=10;i+=2){ //not initialising i as 0 because 0 is not an even number
   console.log(i)
}

//Example 3: Reverse Counting (10 to 1 tak)

console.log('Numbers from 10 to 1 are : ')
for(i=10;i>0;i--){
   console.log(i)
}

// 1 se 10 tak ke odd numbers print karo.

console.log('Odd numbers from 1 to 10 are :')
for(let i=1;i<=10;i+=2){
   console.log(i);
}

//or

console.log('Odd numbers from 1 to 10 are : ')
for(let i=1;i<=10;i++){
   if(i%2!==0){
      console.log(i);
   }
}

// 10 se 1 tak reverse counting print karo.

console.log(' 10 to 1 tak reverse counting :')
for(let i=10;i>0;i--){
   console.log(i);
}
    
//1 se 5 tak numbers ke square print karo.

console.log('1 to 5 numbers squares are :')
for(let i=1;i<=5;i++){
   console.log(i*i);
}

//1 se 5 tak numbers ke cube print karo.

console.log('1 to 5 numbers cubes are :')
for(let i=1;i<=5;i++){
   console.log(i**i);
}

//for cube you can use i*i*i
//but in javascript inorder to get cube of anything
//you can simply use ** e.g : i**i

//1 se 10 tak ka table print karo. (table of 5)

let num=5;
console.log('table of 5:')
for(let i=1;i<=10;i++){
   console.log(`${num} x ${i} = ${num*i}`);
}

//table for 7 :

console.log('table of 7:')
let n = 7;
for(let i=1;i<=10;i++){
   console.log(`${n} x ${i} = ${n*i}`);
}

//odd number from 1 to 5 

console.log('odd numbers from 1 to 5 are :');
for(let i=1;i<=5;i+=2){
   console.log(i);
}

//sum of first 10 natural numbers :

let sum4=0;
for(let i=1;i<=10;i++){
   sum4+=i;
}

console.log('sum of first 10 natural numbers : ' + sum4);

//1 se 10 tak numbers ka factorial find karo.

let number1=10
let factorial = 1
for(let i=1;i<=number1;i++){
   factorial*=i
}

console.log(`factorial of ${number1} is ${factorial}`);

for(let num5=1;num5<=5;num5++){
   let factorial1 = 1;
   for(let i=1;i<=num5;i++){
      factorial1*=i;
   }
   console.log(`Factorial of ${num5} is ${factorial1}`);
}


