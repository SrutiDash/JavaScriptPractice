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

