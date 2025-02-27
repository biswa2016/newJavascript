const accountId = 1444533;
let accountEmail = "abc@gmail.com";
var accountPassword = "12345";
accountCity = "Puri";
let accountState;

// accountId = 2; 
accountEmail = "cdf@gmail.com"
accountPassword = "212121";
accountCity = "cuttack";

/**
 * prefer not to use var
 * because of issue in block scope and function Scope
 */

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])

