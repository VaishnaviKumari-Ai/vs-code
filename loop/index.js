// let i=0
// while (i<10) {
//     console.log("Hello World");
//     i++;
// }


//                                        do while loop
// let i=0;

// do{
//     console.log("Hello!!");
//     i++;
// }while (i<10){};



//                          doesn't run 
// do {
//     let i=1;

//     console.log("done......");
//     i++;
// } while (i<=10) {};


//                               pay attention
// let i=10;
// do {
//     console.log("done......");
//     i++;
// } while (i<=10) {};


//                         input from user

// let a = prompt("Your Name: ");  
// console.log(a);

// console.log(typeof a);                            // return always string

//     to convert it into number
// let b = Number(prompt("Your age: "));  
// console.log(b);                         // return NaN if we write anything instead of number 
// console.log(typeof b);   


// let b = prompt("Your age: ");  
// b=parseInt(b)                           // only work when number comes first otherwise print NaN and only prints integer
// console.log(b);                         
// console.log(typeof b); 


// let b = prompt("Your age: ");  
// b=parseFloat(b)                           // only work when number comes first otherwise print NaN and only prints float
// console.log(b);                         
// console.log(typeof b); 

// let b = prompt("Your age: ");  
// b=Number(b)                           // it return float as well
// console.log(b);                         
// console.log(typeof b); 


//                       alert
// alert("Welcome Back")


// let firstname=prompt("Enter your name: ")
// console.log("Your first name is",firstname)
// alert("Your first name is",firstname)


// //                    template literals

// let firstname=prompt("Enter your name: ");
// alert(`hello ${firstname} Welome to my app.`);



// let expense = Number(prompt("Enter your expense: "))
// expense=parseFloat(expense)
// i=0;
// while (i<expense) {
//     if (expense=="done"){
//         break
//     }else 
// }



let expense = prompt("Enter your expense: ")
let totalincome=0;
while (expense!="done") {
    totalincome+=parseFloat(expense);
    expense = prompt("Enter your expense: ")

}

alert(`total income is ${totalincome}`)
