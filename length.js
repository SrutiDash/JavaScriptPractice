//length

name = 'sruti dash'
console.log(name.length)

//sruti dash
//01.......9(index of an array)
//substring

console.log(name.substring(0,4))
//srut(print from 0th to 4th index) 4 isnot included
//it's technically index of the array which you have given at the beginning
//to the 1 less than the last index of the array which you've given
//e.g : 0,4 : that mens from 0th index to 3rd it will print(n-1)
//(m,n) prints from m to (n-1)
console.log(name.substring(2,8))
//uti da(prints from 2nd to 8th index)

// we can use multiple javascript functions as well
//substing and uppercase
//using multiple functions together

console.log(name.substring(0,5).toUpperCase());

//split

console.log(name.split(''));
// [
//     's', 'r', 'u', 't',
//     'i', ' ', 'd', 'a',
//     's', 'h'
//   ]

//in form of array

things = 'book, pen, pencil, copy';
console.log(things.split(''));
// [
//     'b', 'o', 'o', 'k', ',',
//     ' ', 'p', 'e', 'n', ',',
//     ' ', 'p', 'e', 'n', 'c',
//     'i', 'l', ',', ' ', 'c',
//     'o', 'p', 'y'
//   ]
console.log(things.split(', '))
// [ 'book', 'pen', 'pencil', 'copy' ]

