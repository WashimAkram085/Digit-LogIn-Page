
function login() {
    var mobileno = document.getElementById("mobileNo").value;
    var otp = document.getElementById("otp").value;

    var webMobileNo = "0987654321";
    var webotp = "123456";

    if (mobileno == webMobileNo && otp == webotp) {
        window.location = "main.html";
        return false;
    }
    else{
        alert("Enter correct info");
        window.location.href = "main.html";
    }
};