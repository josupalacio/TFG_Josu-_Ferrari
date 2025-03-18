const modal = document.getElementById("modal-login");
const overlay = document.getElementById("overlay");
const btnCrearCuenta = document.getElementById("btn-crear-cuenta");
const btnIniciarSesion = document.getElementById("btn-iniciar-sesion");
const cerrarModal = document.getElementById("cerrar-modal");

// Función para abrir el modal
function abrirModal() {
    modal.style.display = "block";
    overlay.style.display = "block";
}

// Función para cerrar el modal
function cerrar() {
    modal.style.display = "none";
    overlay.style.display = "none";
}

// Eventos para abrir y cerrar
btnCrearCuenta.addEventListener("click", abrirModal);
btnIniciarSesion.addEventListener("click", abrirModal);
cerrarModal.addEventListener("click", cerrar);
overlay.addEventListener("click", cerrar);
