function login() {
    var login_cuit = document.getElementById("login_cuit").value;
    var login_password = document.getElementById("login_password").value;

    // make an ajax call

    alert(login_cuit);
}

function onlyNumbers(event) {
    var key = window.event ? event.keyCode : event.which;

    if (event.keyCode === 8 || event.keyCode === 46
            || event.keyCode === 37 || event.keyCode === 39) {
        return true;
    } else if (key < 48 || key > 57) {
        return false;
    } else
        return true;
}

/*
 window.addEventListener("batterystatus", onBatteryStatus, false);
 function onBatteryStatus(info) {
 // Handle the online event
 alert(info.level + " isPlugged: " + info.isPlugged);
 }
 */

function disableButton(elementid) {
    document.getElementById(elementid).disabled = "disabled";
}

