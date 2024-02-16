function sumar() {
    //obtener valor del input
    let valor1 = Number(document.getElementById('valor1').value);
    let valor2 = Number(document.getElementById('valor2').value);

    //revisar lo que dijo luis del numero magico
    return resultadoSuma = valor1 + valor2;
}

function restar() {

    let valor1 = Number(document.getElementById('valor1').value);
    let valor2 = Number(document.getElementById('valor2').value);

    //revisar lo que dijo luis del numero magico
    return resultadoResta = valor1 - valor2;
}

//llamar a la función desde el evento click que escuchan los botones

document.getElementById('btn-sumar').addEventListener('click', function(){
    sumar();
    //mostrar resultado
    document.getElementsByClassName('resultado').innerHTML = resultadoSuma; //cómo le asigno el resultado
    console.log(resultadoSuma)
});

document.getElementById('btn-restar').addEventListener('click', function(){
    restar();
    document.getElementsByClassName('resultado').innerHTML = resultadoResta;
    console.log(resultadoResta)
    //Si el resultado de la resta entrega un número negativo debes mostrar un 0 
});