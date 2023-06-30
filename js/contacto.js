const formularioContacto = document.querySelector("#formContacto")
const nombreContacto = document.querySelector("#nombreUsuario")
const asuntoContacto = document.querySelector("#asuntoUsuario")
const emailContacto = document.querySelector("#emailUsuario")
const telefonoContacto = document.querySelector("#telefonoUsuario")
const comentarioContacto = document.querySelector("#comentarioUsuario")
const inputForm1 = document.querySelectorAll(".form-control")
let validar = false


formularioContacto.addEventListener('submit', (event) => {
    event.preventDefault();
    tomarConsulta();
})

function tomarConsulta() {
    const asunto = asuntoContacto.value
    mensajeContacto.classList.remove('disable')
}
