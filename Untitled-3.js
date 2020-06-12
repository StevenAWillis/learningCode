//Data Structrures are differents ways of storing data on our computers
//Data in this context refers to a single piece of information
//When individual pieces of data are grouped together they become Compound data. 
//Compound Data is stored in Data structures. 
//Lets talk about how data is stored on a computer
//2 types of memory Random Access Memory(RAM) Faster but cant survive a powercycle(shutdown & restart) & Read Only Memory(ROM) Slower but more reliable and will survive a powercycle.
//Applications are stored in the ROM. When you launch the App it runs in your RAM to increase the speed. When You save your changes they are stored in the ROM. 
// Two of the most common data structures you will find in JavaScript are Arrays and Objects

//Arrays 
//Collection of items.  Continuous block of cells in computer memory.
//When you add data to an array that data is given an address called and index. 
//Most modern programming languages, like JavaScript, don't start counting at 1 like humans do. They start at 0. This is referred to as Zero-based indexing.
//The first index is assigned the number 0 and the following indexes/indeces continue to increase by 1. e.g. 0,1,2,3,4...1000
//Use an Array when we need data to be in a specific order and whe we need to loop through that data. 

//Print the first letter in the string
let groupon = "Spicy jalapeno bacon ipsum dolor amet picanha sausage biltong pancetta tri-tip shank alcatra strip steak. Bresaola jowl ground round shoulder, tongue pastrami boudin kielbasa. Cupim short ribs pork drumstick landjaeger kevin capicola frankfurter spare ribs ribeye short loin. Buffalo ground round ball tip chislic short ribs tenderloin turkey sirloin t-bone porchetta hamburger pork loin jowl chicken bacon.";
// console.log(groupon[0]);

groupon = "W";

console.log(groupon[0]);


// Arrays and Strings are the only items that have indexes
let numbers = [1,"two",3,4,"five"];
console.log(numbers);
//Print 1,"two", "five" to the console
console.log(numbers[1][3]);
//  Print length of the Array
console.log(numbers.length);
numbers.push(6,10);
console.log(numbers);

//Change the [0] index of numbers to 4 then print the new array
numbers[1] = "three"
console.log(numbers);

//Objects
//Consist of or key/value pairs. Key represents the variable and the value represents the data that key holds.
//Objects are stored differently inside of memory. Theres no index value 
//You assign Keys to an object and you give those keys values
//Use an object when order doesnt matter and you know what your looking for
//Retrieving items from memory and adding items to memory more efficiently
//Looping theough an object is not efficient 
// dot notation and bracket notation
//create myself as an object
let steve = {
    gender:"male",
    age:31,
}
// console.log(steve);
//Print age
console.log(steve.age);
//create Michael as an object
let Michael = {
    gender:"male",
    age:31,
    shoesize:13,
    activities:{
        sports: ["baseball", "football", "basketball"],
        books: ["Lord of the Rings", "Ender's Game"],
    }
}

//Print baseball and Enders Game
console.log(Michael.activities.sports[0],Michael.activities.books[1]);



//Different ways you can manipulate the data based on the Data Structure
//Email preview example while using substring method
console.log(groupon.substring(0,5));
//Retrieve data using methods
console.log(numbers);
console.log(numbers.length);
console.log(numbers[1].length);