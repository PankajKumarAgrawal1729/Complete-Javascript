const accountId = 123;
let accountEmail = "abc@google.com";
var accountPassword = "7483";
accountCity = "Chennai"; //not prefered
let accountState;

// accountId = 2;  not allowed 
accountEmail = "xyz@xyz.com";
accountPassword = "7493";
accountCity = "Benguluru";

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
/* 
Prefer not to use var
because of issue in block scope and functional scope
*/