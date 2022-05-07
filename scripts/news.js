let API_KEY = "6eab18f380ef46a5a7cc50044af5f96b";

let currentUser = parseUser(getFromStorage("LoginUser"))

console.log("current user is: ", currentUser);

let apiData = currentUser.getData(API_KEY)
console.log(apiData);
