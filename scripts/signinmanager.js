function signinmanager() {
    this.loginUser = function () {
        localStorage.loggedIn = "true";

    }
    this.logoutUser = function () {
        localStorage.loggedIn = "false";
    }
    this.checkLogin = function () {
        return localStorage.loggedIn == "true"
    }
}