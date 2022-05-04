fNameInput = document.getElementById("input-firstname")
lNameInput = document.getElementById("input-lastname")
userNameInput = document.getElementById("input-username")
passwordInput = document.getElementById("input-password")
passwordConfirmInput = document.getElementById("input-password-confirm")
submitBtn = document.getElementById("btn-submit")

let userArr = getFromStorage("users").map(obj => parseUser(obj)) || []



function registerData() {
    let data = new User(fNameInput.value, lNameInput.value, userNameInput.value, passwordInput.value)
    if (validateData(data))
        userArr.push(data)
    saveToStorage("users", userArr)
    location.href = "./login.html"
    console.log(data);
}

submitBtn.addEventListener("click", registerData)

function validateData(user) {
    let checkVal = 0
    if (!user.fName) {
        alert("Please enter First Name!")
        checkVal++
    }
    if (!user.lName) {
        alert("Please enter Last Name!")
        checkVal++
    }
    if (!user.userName) {
        alert("Please enter User Name!")
        checkVal++
    }
    if (!user.password) {
        alert("Please enter password!")
        checkVal++
    }
    if (!passwordConfirmInput.value) {
        alert("Please confirm password!")
        checkVal++
    }
    if (userArr.map(obj => obj.userName).includes(user.userName)) {
        alert("User Name must be unique!")
        checkVal++
    }
    if (user.password !== passwordConfirmInput.value) {
        alert("Password and Confirmed Password must be the same!")
        checkVal++
    }
    if (user.password.length <= 8) {
        alert("Password's length must be more than 8!")
        checkVal++
    }
    console.log("check value: ", checkVal)
    if (checkVal) return false
    return true
}
