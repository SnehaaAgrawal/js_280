//Date 28
function full_year(dt) {
    return dt.getFullYear();
}
const dt = new Date(2015, 10, 1);  
console.log(full_year(dt));

//29 date

function sort_year(dt) {
    const fullYear = dt.getFullYear();       
    const twoDigit = fullYear % 100;         
    return twoDigit.toString().padStart(2, '0'); 
}
const dt = new Date(1989, 10, 1);  
console.log(sort_year(dt));

//30 date

function getAmPm(date = new Date()) {
    const hours = date.getHours();             
    return hours >= 12 ? "pm" : "am";          
}
console.log(getAmPm());                        
const testDate = new Date(2025, 5, 19, 9, 0);  
console.log(getAmPm(testDate));               

const testDate2 = new Date(2025, 5, 19, 15, 30); 
console.log(getAmPm(testDate2));

// 31 date
function getAmPm(date = new Date()) {
    const hours = date.getHours();             
    return hours >= 12 ? "PM" : "AM";          
}
console.log(getAmPm());                        
const testDate = new Date(2025, 5, 19, 9, 0);  
console.log(getAmPm(testDate));               

const testDate2 = new Date(2025, 5, 19, 15, 30); 
console.log(getAmPm(testDate2));

//33
function hours_with_zeroes(date) {
  let hours = date.getHours();           // Get hour from 0 to 23

  // Convert 24-hour to 12-hour format
  let hour12 = hours % 12;               // Convert: 13 → 1, 0 → 0
  if (hour12 === 0) {
    hour12 = 12;                         // Special case: 0 → 12 (midnight or noon)
  }

  // Add leading zero if single digit
  let result = hour12 < 10 ? "0" + hour12 : hour12.toString();

  return result;
}
//34
function hours_without_zeroes(date) {
  return date.getHours(); // Directly returns 0–23 with no leading zero
}

//35
function minutes(date){
    let min=date.getMinutes();
    let res=min<10 ? "0"+min: min.toString();
    return res;
}
let dts=new Date(1989,10,1);
console.log(minutes(dts));

//36
function seconds(date){
    let sec=date.getSeconds();
    let res=sec<10 ? "0"+sec : sec.toString();
    return res;
}
let dtt=new Date(1990,11,2);
console.log(seconds(dtt));

//37 
function get_timezone(date) {
  return new Intl.DateTimeFormat('en-US', {
    timeZoneName: 'long'
  }).formatToParts(date).find(part => part.type === 'timeZoneName').value;
}
// 38
function daylights_savings(dt) {
  const january = new Date(dt.getFullYear(), 0, 1);     
  const july = new Date(dt.getFullYear(), 6, 1);        

  const standardOffset = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset());
  return dt.getTimezoneOffset() < standardOffset ? 1 : 0;
}

let dt = new Date();                                     
console.log(daylights_savings(dt));