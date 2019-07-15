function validateLoginForm() {
    var name = document.loginForm.username.value;
    var password = document.loginForm.password.value;

    if (name == null || name == "") {
        alert("Username can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}

function validateSigninForm() {
    var name = document.signinForm.username.value;
    var password = document.signForm.password.value;

    if (name == null || name == "") {
        alert("Username can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }
}  