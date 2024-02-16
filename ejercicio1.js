//CCOMPARAR EL EJERCICIO DE LA GUIA DEL FORMULARIO CON EL DEL FORMULARIO DEL PROFE

//se toma el formulario o el boton del formulario?
//al boton x el evento clic
document.getElementById('botton').addEventListener('click', function (evento) {
    //prevenir comportamiento por defecto
    evento.preventDefault();

    //tomar valores de inputs
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;

    let validarExitoso = true;
    //expresion regular
    let validarCaracteres = /[a-z]/i;
    //usar metodo test() mostrar mensaje de error o exito cuando corresponda
    //serian 3 if porque son mensajes diferentes

    //Comprobación nombre
    // tiene que ser comparado con false LE SAQUE EL FALSE
    if (validarCaracteres.test(nombre) == false) {
        //esto podria ser una alerta, pero voy a probar mostrarlo por pantalla
        document.querySelector(".errorNombre").innerHTML = "Sólo puedes ingresar letras de la 'a' a la 'z'"
        validarExitoso = true;

        //else seria para avisar que tiene que ingresar datos en el formulario
    } else {
        document.querySelector(".errorNombre").innerHTML = "El nombre es requerido."
    }

    //Comprobación asunto
    // tiene que ser comparado con false
    if (validarCaracteres.test(asunto) == false) {
        //esto podria ser una alerta, pero voy a probar mostrarlo por pantalla
        document.querySelector(".errorAsunto").innerHTML = "Sólo puedes ingresar letras de la 'a' a la 'z'"
        validarExitoso = true;

        //else seria para avisar que tiene que ingresar datos en el formulario
    } else {
        document.querySelector(".errorAsunto").innerHTML = "El asunto es requerido."
    }

    //Comprobación mensaje
    // tiene que ser comparado con false
    if (validarCaracteres.test(mensaje) == false) {
        //esto podria ser una alerta, pero voy a probar mostrarlo por pantalla
        document.querySelector(".errorMensaje").innerHTML = "Sólo puedes ingresar letras de la 'a' a la 'z'"
        validarExitoso = true;

        //else seria para avisar que tiene que ingresar datos en el formulario
    } else {
        document.querySelector(".errorMensaje").innerHTML = "El mensaje es requerido."
    }

});

function datosCorrectos() {
    document.querySelector(".resultado").innerHTML = "Mensaje enviado con éxito";
};