class User {
    constructor(fName, lName, userName, password) {
        this.fName = fName;
        this.lName = lName;
        this.userName = userName;
        this.password = password;
    }
    async getData(key) {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=sg&category=business&pageSize=10&page=2&apiKey=${key}`
        );
        const data = await response.json();
        console.log(data);
    }
}

function parseUser(userData) {
    const user = new User(userData.fName, userData.lName, userData.userName, userData.password)
    return user
}