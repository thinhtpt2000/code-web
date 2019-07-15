function validateSigninForm() 
{
    var username = document.signinForm.username.value;
    var password = document.signinForm.password.value;
    var mail = document.signinForm.mail.value
    var name = document.signinForm.first_name.value + document.signinForm.last_name.value;

    if (username == null || username == "") {
        alert("Username can't be blank");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    } else if (name == null || name == "") {
        alert("Please fill us your name");
        return false;
    }

    if (mail == null || mail == "") {
        alert("Please fill us your mail");
        return false;
    }
}