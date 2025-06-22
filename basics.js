//1st
const todays = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const day = days[todays.getDay()]; 

let hours = today.getHours(); 
let min = today.getMinutes();
let sec = today.getSeconds();

const amPm = hours>=12 ? "PM":"AM";

hours = hours%12;
hours = hours ? hours : 12; 
console.log("Today is : " + day + ".");
console.log('Current time is : ${hours} ${amPm} : ${min} : ${sec}');

//2nd
console.log(window.print());

//3rd
const today=new Date();
var date=today.getDate();
var month=today.getMonth()+1;
const year=today.getFullYear();
if(date<10){
    date='0'+date;
}
if(month<10){
    month='0'+month;
}
console.log('Today is:'+date+'-'+month+ '-'+year);

//4th
const a=5;
const b=6;
const c=7;
const s=(a+b+c)/2;
const area=Math.sqrt(s*(s-a)*(s-b)*(s-c));
console.log(area);

//5th
let str="w3resource";
let last=str.slice(-1);
let new_str=str.slice(0,-1);
console.log(last+new_str);

//6th
function isLeapYear(years) {
    return ((years % 4 === 0 && years % 100 !== 0) || (years % 400 === 0));
}
let years = prompt("Enter a year:");
years = parseInt(years);

if(isNaN){
    console.log('invalid');
}
if (isLeapYear(years)) {
    console.log(years + " is a leap year.");
} else {
    console.log(years + " is not a leap year.");
}

//7th
