class User {
    constructor(fName, lName, userName, password) {
        this.fName = fName;
        this.lName = lName;
        this.userName = userName;
        this.password = password;
    }
}

function parseUser(userData) {
    const user = new User(userData.fName, userData.lName, userData.userName, userData.password)
    return user
}