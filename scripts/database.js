function database() {

    this.getUsers = function () {
        return this.users;
    }
    this.addUser = function (user) {

        const users = JSON.parse(localStorage.users);
        users.push(user);
        localStorage.users = JSON.stringify(users);
    }
    this.getUserbyEmail = function (email) {
        const users = JSON.parse(localStorage.users);
        for (let user of users) {
            if (user.email == email) {
                return user;
            }
        }
    }
}