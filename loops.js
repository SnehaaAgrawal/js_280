// 1. Accept two integers and display the larger
let a = 10;
let b = 20;

if (a > b) 
  console.log(`${a} is larger`);

else if (b > a) 
  console.log(`${b} is larger`);

else 
  console.log("Both are equal");


// 2. Find the sign of product of three numbers

let x = 3, y = -7, z = 2;
let product = x * y * z;

if (product > 0) {
  console.log("The sign is +");
} else {
  console.log("The sign is -");
}

// 3. Sort three numbers

let nums = [0, -1, 4];
nums.sort((a, b) => b - a); // descending
console.log(nums); // Output: 4,0,-1

// 4. Find the largest of five numbers

let nums = [-5, -2, -6, 0, -1];
let max = Math.max(...nums);
console.log("The largest number is: " + max); // Output: 0

// 5. For loop to check even or odd from 0 to 15
function evenOddLoop() {
  let result = [];
  for (let i = 0; i <= 15; i++) {
    result.push(`${i} is ${i % 2 === 0 ? 'even' : 'odd'}`);
  }
  return result;
} 

// 6. Compute average marks and grade

let students = [
  ["David", 80],
  ["Vinoth", 77],
  ["Divya", 88],
  ["Ishitha", 95],
  ["Thomas", 68]
];

let total = 0;

// Add all the marks
for (let i = 0; i < students.length; i++) {
  total += students[i][1];
}

let average = total / students.length;


// Simple grade check
let grade = "";

if (average >= 90) grade = "A";
else if (average >= 80) grade = "B";
else if (average >= 70) grade = "C";
else if (average >= 60) grade = "D";
else grade = "F";

// Show result
console.log("Average Grade: " + grade);


// 7. FizzBuzz from 1 to 100


for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}


// 8. First 5 happy numbers
function isHappy(n) {
  let seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    n = n.toString().split('').reduce((sum, digit) => sum + Math.pow(+digit, 2), 0);
  }
  return n === 1;
}

function firstFiveHappyNumbers() {
  let result = [];
  let num = 1;
  while (result.length < 5) {
    if (isHappy(num)) result.push(num);
    num++;
  }
  return result;
}



// 9. Find 3-digit Armstrong numbers
function armstrongNumbers() {
  let result = [];
  for (let i = 100; i <= 999; i++) {
    let sum = i.toString().split('').reduce((acc, d) => acc + Math.pow(+d, 3), 0);
    if (sum === i) result.push(i);
  }
  return result;
}



// 10. Print triangle pattern with nested loop
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}



// 11. Compute GCD of two numbers

function gcd(a, b) {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

console.log(gcd(12, 18)); // Output: 6


// 12. Sum of multiples of 3 and 5 under 1000

let sum = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log("Sum: " + sum);
