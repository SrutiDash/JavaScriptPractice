for(i=0;i<10;i++){
    console.log(i)
}

//0-9 print

//to print right angled triangle

n = 5; // Number of rows

for (i = 1; i <= n; i++) {  // Outer loop - rows ke liye
    pattern = "";  // Har line ke liye ek empty string
    for (j = 1; j <= i; j++) {  // Inner loop - columns ke liye
        pattern += "*";  // `pattern` me ek ek `*` add hoga
    }
    console.log(pattern);  // Har row ke baad pattern print hoga
}

//how to approach a star pattern question?

//run the outer for loop the number of times you're having the lines

// *
// **
// ***
// ****
// *****
console.log('----------------')
num = 5; 
for(row=1;row<=num;row++){
    pattern=''
    for(col=1;col<=row;col++){
        pattern+='*'
    }
    console.log(pattern);
}




  