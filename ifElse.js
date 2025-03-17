// if
// else if
// else

let hour = 10;

// if (hour<=6 && hour>12){
//    console.log('Good Morning');   
// }else if(hour<=12 && hour>=18){
//     console.log('Good Afternoon')
// }else{
//     console.log('Good Evening')
// } 

//write in a better way :

if (hour<=6 && hour>12)
    console.log('Good Morning');   
 else if(hour<=12 && hour>=18)
     console.log('Good Afternoon')
 else
     console.log('Good Evening');

//without {} is better and more readble in javascript     

let time = 10;

if(time<=0 && time>=6){
    console.log('Good afternoon')
}else{
    console.log('Good Evening')
}


//for switch operator same question :

let user = 'guest'

// if(user == 'admin')
//     console.log('admin user')
// else if(user == 'moderator')
//     console.log('moderator user')
// else if(user == 'guest')
//     console.log('guest user')
// else
//     console.log('unknown user')

//or   

if(user === 'guest') console.log('guest user');
else if(user === 'admin') console.log('admin user')
else console.log('unknown user');    