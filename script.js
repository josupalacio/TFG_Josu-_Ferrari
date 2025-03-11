function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (username === "admin" && password == "1234") {
        alert("Login existoso");
        window.location.href="index.html";
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrecto";
        errorMessage.style.color = "red";
    }
}