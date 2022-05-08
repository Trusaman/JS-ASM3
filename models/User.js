class User {
    constructor(fName, lName, userName, password) {
        this.fName = fName;
        this.lName = lName;
        this.userName = userName;
        this.password = password;
    }
    async getData(key, page, size, category) {
        const response = await fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${size}&page=${page}&apiKey=${key}`
        );
        const data = await response.json();
        return data

    }
}

function parseUser(userData) {
    const user = new User(userData.fName, userData.lName, userData.userName, userData.password)
    return user
}