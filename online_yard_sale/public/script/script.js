let button = document.getElementById("btn-login");

button.addEventListener('click', function check() {
    var reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/; 
    let mail = document.getElementById("mail"); 
    let password = document.getElementById("key"); 
    if (mail.value === "") { 
        alert("Email is Empty");
        return false;
    } else if (!reg.test(mail.value)) { 
        alert("Please Enter a Valid Email");
        return false;
    } else if (password === null || password.length() === 0) {
        alert("Password is Empty");
        return false;
    } else {
        alert("Pass");
        return true;
    }
});


