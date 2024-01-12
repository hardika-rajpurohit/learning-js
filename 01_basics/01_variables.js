const accountId = 144557
let accountEmail = "hardika.rajpurohit@gmail.com"
var accountPassword = "12345"
accountCity = "Jodhpur"

// accountId = 2 // not allowed

accountEmail = "hr@gmail.com"
accountPassword = "67890"
accountCity = "Jaipur"
let accountState;

console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])