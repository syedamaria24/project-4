// CHAP 12 TO 16

// Problem 1: Character Type Checker


var char = prompt("Enter a character:");
var asciiValue = char.charCodeAt(0);

if (!char) {
  alert("Please enter a character.");
} else if (asciiValue >= 48 && asciiValue <= 57) {
  alert("You entered a number.");
} else if (asciiValue >= 65 && asciiValue <= 90) {
  alert("You entered an uppercase letter.");
} else if (asciiValue >= 97 && asciiValue <= 122) {
  alert("You entered a lowercase letter.");
} else {
  alert("You entered a special character.");
}


// Problem 2: Larger Integer


let num1 = parseInt(prompt("Enter first integer: "));
let num2 = parseInt(prompt("Enter second integer: "));

if (isNaN(num1) || isNaN(num2)) {
  alert("Please enter valid integers.");
} else if (num1 > num2) {
  alert(${num1} is larger.);
} else if (num1 < num2) {
  alert(${num2} is larger.);
} else {
  alert("Both integers are equal.");
}


// Problem 3: Number Sign Checker


let num = parseFloat(prompt("Enter a number: "));

if (isNaN(num)) {
  alert("Please enter a valid number.");
} else if (num > 0) {
  alert("The number is positive.");
} else if (num < 0) {
  alert("The number is negative.");
} else {
  alert("The number is zero.");
}


// Problem 4: Vowel Checker


function isVowel(char) {
  return 'aeiouAEIOU'.includes(char);
}

var char = prompt("Enter a character: ");


if (!char || char.length !== 1) {
  alert("Please enter a single character.");
} else if (isVowel(char)) {
  alert("The character is a vowel.");
} else {
  alert("The character is not a vowel.");
}


// Problem 5: Password Validator


const correctPassword = "password123";

let userInput = prompt("Enter your password: ");

if (!userInput) {
  alert("Please enter your password.");
} else if (userInput === correctPassword) {
  alert("Correct! The password you entered matches the original password.");
} else {
  alert("Incorrect password.");
}

// problem 6

var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting); // Output: Good day


// chap 14 to 16



// 1. Empty Array using JS Literal Notation
var studentNames = [];
console.log(studentNames);

// 2. Empty Array using JS Object Notation
let studentNamesObject = JSON.parse('[]');
console.log( studentNamesObject);

// 3. Initialized Strings Array
var colors = ["Red", "Green", "Blue", "Yellow"];
console.log( colors);

// 4. Initialized Numbers Array
let numbers = [10, 20, 30, 40, 50];
console.log( numbers);

// 5. Initialized Boolean Array
let boolValues = [true, false, true, false];
console.log( boolValues);

// 6. Initialized Mixed Array
let mixedArray = ["Apple", 25, true, null, undefined, 3.14];
console.log( mixedArray);

// 7. Education Qualifications Array
let qualifications = ["SSC ","HSC ","BCS ","BS ","BCOM ","MS ","M. Phil.","PhD "];
console.log( qualifications);

document.write("<h1>Available Education Qualifications in Pakistan:</h1><ul>");

qualifications.forEach(qualification => {
document.write(<li>${qualification}</li>);
});

document.write("</ul>");


// 8. Student Names and Scores
var studentNames = ["Alice", "Bob", "Charlie"];
var studentScores = [400, 450, 420];

console.log("Student Names:", studentNames);
console.log("Student Scores:", studentScores);

for (let i = 0; i < studentNames.length; i++) {
  let percentage = (studentScores[i] / 500) * 100;
  console.log(${studentNames[i]}'s score is ${studentScores[i]} out of 500 (${percentage}%));
}

// 9. Color Array Operations
var colors = ["Red", "Green", "Blue"];

// a. Add color to beginning
document.write("<h1>Colors:</h1><ul>");
colors.forEach(color => {
  document.write(<li>${color}</li>);
});
document.write("</ul>");

let newColor = prompt("Enter a color to add to the beginning:");
colors.unshift(newColor);
document.write("<h1>Updated Colors:</h1><ul>");
colors.forEach(color => {
  document.write(<li>${color}</li>);
});
document.write("</ul>");

// b. Add color to end
newColor = prompt("Enter a color to add to the end:");
colors.push(newColor);
document.write("<h1>Updated Colors:</h1><ul>");
colors.forEach(color => {
  document.write(<li>${color}</li>);
});
document.write("</ul>");

// c. Add two colors to beginning
colors.unshift("Yellow", "Orange");
document.write("<h1>Updated Colors:</h1><ul>");
colors.forEach(color => {
  document.write(<li>${color}</li>);
});
document.write("</ul>");

// d. Delete first color
colors.shift();
document.write("<h1>Updated Colors:</h1><ul>");
colors.forEach(color => {
  document.write(<li>${color}</li>);
});
document.write("</ul>");

// e. Delete last color
colors.pop();
document.write("<h1>Updated Colors:</h1><ul>");
colors.forEach(color => {
  document.write(<li>${color}</li>);
});
document.write("</ul>");

// f. Add color at specific index
let index = parseInt(prompt("Enter index to add color:"));
newColor = prompt("Enter color name:");
colors.splice(index, 0, newColor);
document.write("<h1>Updated Colors:</h1><ul>");
colors.forEach(color => {
  document.write(<li>${color}</li>);
});
document.write("</ul>");

// g. Delete colors from specific index
index = parseInt(prompt("Enter index to delete colors:"));
let count = parseInt(prompt("Enter number of colors to delete:"));
colors.splice(index, count);
document.write("<h1>Updated Colors:</h1><ul>");
colors.forEach(color => {
  document.write(<li>${color}</li>);
});
document.write("</ul>");


// 10. Sorting Student Scores


// Store student scores in an array
let studentScores = [85, 90, 78, 92, 88];

console.log("Unsorted Scores:", studentScores);

// Sort scores in ascending order
studentScores.sort((a, b) => a - b);

console.log("Sorted Scores:", studentScores);


// 11. Copying City Names


// Initialize cities array
let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Seattle"];

// Initialize selectedCities array
let selectedCities = [];

// Copy 3 city elements to selectedCities
selectedCities = cities.slice(0, 3);

console.log("Cities:", cities);
console.log("Selected Cities:", selectedCities);


// 12. Joining Array Elements into a String


// Initialize array
var arr = ["This ", " is ", " my ", " cat"];

// Join array elements into a string
let sentence = arr.join("");

console.log("Array:", arr);
console.log("Sentence:", sentence);

// 13.

// Create a new array
let fifoArray = [];

// Store values one by one
fifoArray.push(10);
fifoArray.push(20);
fifoArray.push(30);
fifoArray.push(40);
fifoArray.push(50);

console.log("Stored Values:", fifoArray);

// Access values in the order they were stored
while (fifoArray.length > 0) {
  console.log(fifoArray.shift());
}


// 14. 
// Create a new array
let lifoArray = [];

// Store values one by one
lifoArray.push(10);
lifoArray.push(20);
lifoArray.push(30);
lifoArray.push(40);
lifoArray.push(50);

console.log("Stored Values:", lifoArray);

// Access values in reverse order (Last In- First Out)
while (lifoArray.length > 0) {
console.log(lifoArray.pop());
}

// 15.
// Store phone manufacturers in an array
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// Display dropdown/select menu in browser
document.write("<select>");
document.write("<option>Select Manufacturer</option>");

// Loop through array and create options
phoneManufacturers.forEach(manufacturer => {
document.write(<option>${manufacturer}</option>);
});

document.write("</select>");