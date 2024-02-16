//Funciones para suma y resta 
function sumar() {
    //obtener valor del input
    let valor1 = Number(document.getElementById('valor1').value);
    let valor2 = Number(document.getElementById('valor2').value);

    //revisar lo que dijo luis del numero magico
    return valor1 + valor2;
}

function restar() {

    let valor1 = Number(document.getElementById('valor1').value);
    let valor2 = Number(document.getElementById('valor2').value);

    //revisar lo que dijo luis del numero magico
    return resultadoResta = valor1 - valor2;
}

//llamar a la función desde el evento click que escuchan los botones

document.getElementById('btn-sumar').addEventListener('click', function () {
    //capturar el valor del resultado en una variable (es lo mismo que retornarlo antes en la función)
    resultadoSuma = sumar();
    //mostrar resultado
    //con getElementsByClassName no funciona, por el valor que me devuelve
    //getElementsByClassName() retorna una HTMLCollection "viva" conteniendo todos los elementos hijos que tienen todos los nombres de clase dados.
    document.querySelector('.resultado').innerHTML = resultadoSuma;
    // console.log(resultadoSuma)
});

document.getElementById('btn-restar').addEventListener('click', function () {
    restar();
    document.querySelector('.resultado').innerHTML = resultadoResta;
    // console.log(resultadoResta)
    //Si el resultado de la resta entrega un número negativo debes mostrar un 0
    if (resultadoResta < 0) {
        document.querySelector('.resultado').innerHTML = 0;
    }
});