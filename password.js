var pass = document.getElementById("password_reg");
var msg = document.getElementById("message-pass");
var strght = document.getElementById("strenght");

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    }
    else {
        msg.style.display = "none";
    }
    if (pass.value.length < 4) {
        strght.innerHTML = "weak";
        pass.style.borderColor = "#ff5925";
        msg.style.color = "#ff5925";
    }
    else if (pass.value.length >= 4 && pass.value.length < 8) {
        strght.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if(pass.value.length >= 8) {
        strght.innerHTML = "strong";
        pass.style.borderColor = "#26d730";
        msg.style.color = "#26d730";
    }
});
