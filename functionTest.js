//functions

//Problem set. Write a function that takes a number and multiplies it by 9
// Write a function
//have a parameter that is user given === done
//output the product

// node in terminal is the runtime. An interpereter. Other language compile. JS takes the code an interperets it. 

function multiplyNumBy9(num){   //Delares a funtion named multiplier that takes in a variable named number
    let product = num * 9;      // created a variable named product that i set equal to the product of num and 9

    if (product >= 90) {
        console.log("Yeah Boi!");
    }else {
        console.log("You'll getem next time!!!");
    }

    // console.log(product);       //print value of prodict to console 
    return product              //return value of variable product

}


// multiplyNumBy9(3); // This can be reused 
// multiplyNumBy9(5);
// multiplyNumBy9(7);
// multiplyNumBy9(10);
// multiplyNumBy9(13);
// multiplyNumBy9(32);

//if / else statements

// function nameEval(nme){
//     let namelength = nme.length;
//     if(namelength >= 6) {
//         console.log("That's a long name");
//     }else {
//         console.log("somebody loves you baby");
//     }
// }

// nameEval("Shaw");

// function count225(){
//     for(i=1;i<=225;i++){
//         console.log(i);
//     }
// }

// count225();

// function countOdd225(){
//     for(i=1;i<=225;i++){
//         if(i%2 != 0){
//         console.log(i);   
//         }
        
//     }
// }

// countOdd225();

// function countOddNum(num){
//     for(i=1;i<=num;i++){
//         if(i%2 != 0){
//         console.log(i);   
//         }
        
//     }
// }

// countOddNum(12);

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "0543236543",
//         "likes": ["Pizza", "Coding", "Brownie Points"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "0994372684",
//         "likes": ["Hogwarts", "Magic", "Hagrid"]
//     },
//     {
//         "firstName": "Sherlock",
//         "lastName": "Holmes",
//         "number": "0487345643",
//         "likes": ["Intriguing Cases", "Violin"]
//     },
//     {
//         "firstName": "Kristian",
//         "lastName": "Vos",
//         "number": "unknown",
//         "likes": ["JavaScript", "Gaming", "Foxes"]
//     }
// ];


// function lookUpProfile(name, prop){
// // Only change code below this line
//     // console.log( `name: ${name} prop: ${prop}`);
//     for (var i = 0; i < contacts.length; i++ ) {
//         if (contacts[i].firstName === name && contacts[i].hasOwnProperty(prop) === true) {
//             console.log(`first ${contacts[i].firstName} name: ${name} prop: ${contacts[i].hasOwnProperty(prop)} propName: ${prop} `);
//             console.log("No such property");
//             return "No such property";
//         } else if (contacts[i].firstName !== name ) {
//             console.log("No such contact");
//             return "No such contact";
//         }else if(contacts[i].firstName === name && contacts[i].hasOwnProperty(prop)) {
//             console.log(contacts[i][prop]);
//             return contacts[i][prop];
//         }

//     }
// // Only change code above this line
// }

// lookUpProfile("Kristian", "lastName");

function brianTimes10(arr,item){
    let math = arr[item];
    return math;
};
let testArray = [1,2,3,4];
console.log(brianTimes10(testArray,3));

//New Edition
