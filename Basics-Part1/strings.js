const name = "Pankaj";
const repoCount = 24;

console.log(name + repoCount);

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`);

const gameName = new String("Pankaj-Kumar-coder");
console.log(gameName);  // [String: 'Pankaj Kumar']
console.log(gameName[0]);  // P
console.log(gameName.__prototype__);
console.log(gameName.toUpperCase());   // PANKAJ-KUMAR-CODER
console.log(gameName.charAt(2));  // n
console.log(gameName.indexOf('k'));  // 3

const newString = gameName.substring(0, 4);
console.log(newString);  // Pank

const anotherString = gameName.slice(-12, 4);  // Pank
console.log(anotherString);

const newStringOne = "     Pankaj   ";
console.log(newStringOne);  //     Pankaj   
console.log(newStringOne.trim()); // Pankaj

const url = "https://url.com/url%20go";
console.log(url.replace('%20','-'));   // https://url.com/url-go
console.log(url.includes('url'));   // true

console.log(gameName.split('-'));  // [ 'Pankaj', 'Kumar', 'coder' ]