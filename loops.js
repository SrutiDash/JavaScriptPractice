//to print numbers from 1 to 10

for(i=1;i<=10;i++){
    console.log(i);
}

i=1;
while(i<=10){
    console.log(i)
    i++;
}

todo = [
    {
        numberOfTea : 4,
        numberOfCoffee : 10,
        state : 'karnataka'
    },
    {
        numberOfTea : 8,
        numberOfCoffee : 3,
        state : 'madhya pradesh'
    },
    {
        numberOfTea : 15,
        numberOfCoffee : 7,
        state : 'delhi'
    }
]

console.log(todo)
console.log(todo.length)

for(i=0;i<todo.length;i++){
    console.log('number of coffee consumed by ' + todo[i].state + ' are ' + todo[i].numberOfCoffee)
}

//but for this type of conditions we need to use for of loop

for(let x of todo){   //here x can be anything 
    console.log(x.state, x.numberOfCoffee)  //no need of array index anymore                                            //x is treated as array index
}

//high order array methods

//forEach
//map
//filter


//for Each
//it will print one by one not by array
todo.forEach(function(y){
    console.log(y.state);
});

//map


//it prints as an array but the value is not stored(return is not used
//as console log is used that's why it's printing one b one not by array)
todo.map(function(y){
   console.log(y.numberOfCoffee)
});

// if you want to return an array then use this

const todoList = todo.map(function(y){
    return y.state;
});
console.log(todoList);

//filter
//as as a conditional statement
const TodoList = todo.filter(function(y){
    return y.numberOfCoffee === 3;
});

console.log(TodoList); //prints the array of an object with matching condition e.g : numberofCcofee with 3


//uses both filter and map function
//finter will filter out the specific object of an array
//map will return and store the array with the specific object literal
const TodoList2 = todo.filter(function(y){
    return y.numberOfCoffee === 3;
}).map(function(y){
    return y.state
});

console.log(TodoList2);

