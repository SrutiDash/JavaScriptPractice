//objects

let person = {
    firstName : 'sruti',
    lastName : 'dash',
    age : 24,
    hobbies : ['music', 'painting', 'sleeping', 'cooking'],
    address :{
        street : 'saint laurent street',
        city : 'paris',
        state : 'le-de-France'
    }
}

console.log(person)
console.log(person.address)
console.log(person.firstName, person.lastName)
console.log(person.address.state) //object inside object
console.log(person.hobbies[2])
console.log(person.hobbies.indexOf('painting')) //index of an array which is an object literal
console.log(person.hobbies[3].length) //length of array index which is insode object literal

console.log(person.hobbies.splice(0,2)) //splice keyword will delete the the elements which has been mentionded
//like 0 , 2 it will delete from 1 to 2
console.log(person.hobbies)

//trim
//it will remove extra spaces

let cake = " straw berry short cake " 
console.log(cake.trim());


let text = "   JavaScript  ";

console.log(text.trimStart()); // "JavaScript   "
console.log(text.trimEnd());   // "   JavaScript"
