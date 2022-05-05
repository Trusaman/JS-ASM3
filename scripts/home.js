let loginModal = document.getElementById("login-modal");
let mainContent = document.getElementById("main-content");
let logoutBtn = document.getElementById("btn-logout")


if (getFromStorage("LoginUser")) {
  loginModal.style.display = "none";
  document.getElementById("welcome-message").textContent = `Welcome ${
    getFromStorage("LoginUser").fName
  }`;
} else {
    mainContent.display = "none"
}

function logoutData() {
    localStorage.removeItem("LoginUser")
    location.href = "./pages/login.html"
}

logoutBtn.addEventListener("click", logoutData)