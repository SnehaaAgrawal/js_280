/*function reversenum(x){
    let ans = 0;
    while(x>0){
        let dig = x%10;
        ans = (ans*10)+dig;
        x = Math.floor(x/10);
    }
    return ans;
}
console.log(reversenum(325773));
*/
//United states of america
/*function long_name(clist){
    let longest="";
    for(let i=0; i<clist.length; i++){
        if(clist[i].length>longest.length){
            longest=clist[i];
        }
    }
    return longest;
}
const result = long_name(["Australia", "Germany", "United States of America"]);
console.log("longest country length is:",result);*/

//Date 28
/*function full_year(dt) {
    return dt.getFullYear();
}
const dt = new Date(2015, 10, 1);  
console.log(full_year(dt));
*/
//29 date
/*
function sort_year(dt) {
    const fullYear = dt.getFullYear();       
    const twoDigit = fullYear % 100;         
    return twoDigit.toString().padStart(2, '0'); 
}
const dt = new Date(1989, 10, 1);  
console.log(sort_year(dt));
*/
//30 date
/*
function getAmPm(date = new Date()) {
    const hours = date.getHours();             
    return hours >= 12 ? "pm" : "am";          
}
console.log(getAmPm());                        
const testDate = new Date(2025, 5, 19, 9, 0);  
console.log(getAmPm(testDate));               

const testDate2 = new Date(2025, 5, 19, 15, 30); 
console.log(getAmPm(testDate2));
*/
/* 31 date
function getAmPm(date = new Date()) {
    const hours = date.getHours();             
    return hours >= 12 ? "PM" : "AM";          
}
console.log(getAmPm());                        
const testDate = new Date(2025, 5, 19, 9, 0);  
console.log(getAmPm(testDate));               

const testDate2 = new Date(2025, 5, 19, 15, 30); 
console.log(getAmPm(testDate2));
*/
// 38
function daylights_savings(dt) {
  const january = new Date(dt.getFullYear(), 0, 1);     
  const july = new Date(dt.getFullYear(), 6, 1);        

  const standardOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
  return dt.getTimezoneOffset() < standardOffset ? 1 : 0;
}

let dt = new Date();                                     
console.log(daylights_savings(dt));

/*..................Strings..............*/
// 21
function repeat_string(str, count) {
  if (typeof str !== 'string' || count < 0) {
    return "Error in string or count.";     // Check for invalid input
  }

  return str.repeat(count);                 // Use built-in repeat method to repeat string
}

// Test cases
console.log(repeat_string('sne', 4));         // Output: "aaaa"
console.log(repeat_string('a'));  

/*................................*/
//22
function subStrAfterChars(str, char, pos) {
  if (pos === 'a') {
    return str.substring(0, str.indexOf(char));  // Get part before the character
  } else if (pos === 'b') {
    return str.substring(str.indexOf(char) + 1); // Get part after the character
  } else {
    return str;  // If position not 'a' or 'b', return whole string
  }
}
//23
function func(str){
    let res="";
    for(let i=0; i<str.length; i++){
        const ch = str[i]
        if(ch!=" "){
            res=res+ch;
        }
    }
    return `"${res}"`;

}
console.log(func(" sneha "));
//24
function truncate(str, numWords) {
  const words = str.split(" ");           // Split the string into an array of words
  const truncated = words.slice(0, numWords); // Take only the first `numWords` words
  return truncated.join(" ");             // Join them back into a string
}

console.log(truncate('My name is sneha agrawal', 4));
//25
function alphabetize_string(str) {
  // Remove spaces and convert to array
  const lettersOnly = str.replace(/\s+/g, '').split(''); //remove space ,tabs
  
  // Sort the array alphabetically
  const sorted = lettersOnly.sort();
  
  // Join sorted letters back into a string
  return sorted.join('');
}

console.log(alphabetize_string('United States'));


//26
function remove_1st_ocurrence(str, input) {
    // Step 1: Split the string into words
    let arr = str.split(" ");

    // Step 2: Loop and remove first occurrence of `input`
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === input) {
            arr.splice(i, 1);  // Remove the word at index i
            break;             // Stop after first match
        }
    }

    // Step 3: Join words back into a string and return
    return arr.joi
    n(" ");
}
console.log(remove_1st_ocurrence("The quick brown fox jumps over lazy dog","The"));