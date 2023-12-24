// Dates

let myDate = new Date();
console.log(myDate);  // 2023-12-24T06:41:19.097Z
console.log(myDate.toString());  // Sun Dec 24 2023 06:41:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  // Sun Dec 24 2023
console.log(myDate.toLocaleString());  // 12/24/2023, 6:42:47 AM
console.log(typeof myDate);   // object

let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());   /// Mon Jan 23 2023

let newDate1 = new Date(2023, 0, 23, 5, 3);
console.log(newDate1.toLocaleString());  // 1/23/2023, 5:03:00 AM

let newDate2 = new Date("2023-01-14");
console.log(newDate2.toLocaleString());  // 1/14/2023, 12:00:00 AM

let newDate3 = new Date("01-14-2023");
console.log(newDate3.toLocaleString());   // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp / 1000));   // time in second

let newDate4 = new Date();
console.log(newDate4.getFullYear());  // 2023

console.log(newDate4.toLocaleString('default', {
    weekday: "long",
    timeZone: 'GMT'
}));  // Sunday