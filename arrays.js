//arrays

//using constructors

num = new Array(1,2,3,4,5)
console.log(num);

//for most parts

fruits = ['apple', 55.4 , 'orange', false,  'banana', 'grapes', 34]
console.log(fruits) //printing array
console.log(fruits[4]) //printing index of an array
console.log(typeof(fruits[5])) //print type of index of an array\
fruits[7] = 'hello' //adding new index in the existing array
console.log(fruits)
console.log(fruits[7])
fruits[3] = 33 //initialising inexing of an array
//note :if i were using cosnt fruits i would not be able to initilie
// it again as in is a constant
console.log(fruits)
console.log(fruits[3])

//if you're unaware how many array index is in your array
//and you want to add an array index at the end, upu ca use push :

fruits.push('mango')
console.log(fruits)
console.log(fruits.length)

//if you're unaware how many array index is in your array
//and you want to add an array index in the beginning, upu ca use unshift :

fruits.unshift(2)
console.log(fruits)
console.log(fruits[0])
console.log(fruits.length)
console.log('----------------------------------------')

//if you want to remove the first index of an array then use shift
fruits.shift()
console.log(fruits)
console.log(fruits.length)

//if you want to remove the last index of the array then you can use pop

fruits.pop();
console.log(fruits)
console.log(fruits.length)

//if you want to add in the last index use push

fruits.push('hii');
console.log(fruits)
console.log(fruits.length)

//if you want to check if the variable is an array or not use isArray
console.log(Array.isArray('hii')) //returns false as there is no hii inside fruits array
console.log(fruits)
console.log(Array.isArray(34)) //false as 34 is not an array
console.log(Array.isArray(fruits)) //true as fruits is an array

//if you want to check if any value that is inside an array then use arrayname.includes
console.log(fruits.includes(34))