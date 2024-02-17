//Almacenar formulario en variable formulario
let formulario = document.getElementById('formulario')

//Función que avisa que formulario pasa la validación
function datosCorrectos() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito !!!";
};

//Función resetear
function limpiarAvisos() {
    document.querySelector(".resultado").innerHTML = "";
    document.querySelector(".errorNombre").innerHTML = "";
    document.querySelector(".errorAsunto").innerHTML = "";
    document.querySelector(".errorMensaje").innerHTML = "";
};

//Función que valida los datos del input
function validarDatos(nombre, asunto, mensaje) {

    //interruptor para validación
    let validarExitoso = true;
    //expresion regular
    //Esta expresión regular valida que lo ingresado en el input solo sean caracteres alfabéticos de la “a” hasta la “z” para poder enviar la información. (Permite espacios también)
    let validarCaracteres = /^[a-zA-Z\s]+$/;
    //usar metodo test() mostrar mensaje de error o exito cuando corresponda

    //serian 3 if porque son mensajes diferentes para cada input
    //Comprobación nombre
    //Primero validar si el campo no está vacío y luego si es alfabético
    if (nombre == "") {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
        validarExitoso = false;
    } else if (validarCaracteres.test(nombre) === false) {
        document.querySelector(".errorNombre").innerHTML = "Sólo puedes ingresar letras de la 'a' a la 'z'"
        validarExitoso = false;
    }

    //Comprobación asunto
    if (asunto == "") {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido."
        validarExitoso = false;
    } else if (validarCaracteres.test(asunto) === false) {
        document.querySelector(".errorAsunto").innerHTML = "Sólo puedes ingresar letras de la 'a' a la 'z'"
        validarExitoso = false;
    }

    //Comprobación mensaje
    if (mensaje == "") {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido.";
        validarExitoso = false;
    } else if (validarCaracteres.test(mensaje) === false) {
        document.querySelector(".errorMensaje").innerHTML = "Sólo puedes ingresar letras de la 'a' a la 'z'";
        validarExitoso = false;
    }

    return validarExitoso;
};

//Detectar submit en el formulario, y dentro de la función que está como parámetro en el addEventListener prevenir envío del formulario y ejecutar resto de procesos
formulario.addEventListener('submit', function (evento) {
    //prevenir comportamiento por defecto
    evento.preventDefault();
    limpiarAvisos()

    //tomar valores de inputs
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;

    let resultado = validarDatos(nombre, asunto, mensaje);

    if (resultado === true) {
        datosCorrectos();
    }

});