let userInput = document.getElementById("input-username")
let passwordInput = document.getElementById("input-password")
let submitBtn = document.getElementById("btn-submit")

let userArr = getFromStorage("users").map(obj => parseUser(obj)) || []

console.log("User arr: ", userArr);

function validateLogin(data) {
    if (!data.userName) {
        alert("Please enter username!")
    }
    if (!data.password) {
        alert("Please enter password!")
    }
}

function loginData() {
    let user = {
        userName: userInput.value,
        password: passwordInput.value
    }
    validateLogin(user)
}

submitBtn.addEventListener("click", loginData)