let userInput = document.getElementById("input-username");
let passwordInput = document.getElementById("input-password");
let submitBtn = document.getElementById("btn-submit");


let userArr = getFromStorage("users")?.map((obj) => parseUser(obj)) || [];

console.log("User arr: ", userArr);

function validateLogin(data) {
  if (!data.userName) {
    alert("Please enter username!");
  }
  if (!data.password) {
    alert("Please enter password!");
  }
  if (!userArr.map((user) => user.userName).includes(data.userName)) {
    alert("The user name is not registered!");
  } else {
    if (
      userArr.filter((obj) => obj.userName == data.userName)[0].password !==
      data.password
    ) {
      alert("Wrong password!");
    } else {
        saveToStorage("LoginUser", userArr.filter((obj) => obj.userName == data.userName)[0])
        return true
    }
  }
  return false
}

function loginData() {
  let user = {
    userName: userInput.value,
    password: passwordInput.value,
  };
  if (validateLogin(user)) window.location.href = "../index.html"
}

submitBtn.addEventListener("click", loginData);
