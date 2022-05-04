

let userArr = getFromStorage("users").map(obj => parseUser(obj)) || []

console.log("User arr: ", userArr);