document.getElementById('btn-1').addEventListener('click', cambiarColor);
document.getElementById('btn-2').addEventListener('click', cambiarColor);
document.getElementById('btn-3').addEventListener('click', cambiarColor);
document.getElementById('btn-4').addEventListener('click', cambiarColor);
document.getElementById('btn-5').addEventListener('click', cambiarColor);
document.getElementById('btn-6').addEventListener('click', cambiarColor);

function cambiarColor(event) {

    // variable que almacena el id del botón que está detectando el click
    let btnClick = event.target.id;

    //if que cambia color de caja según id de botón clickeado
    if (btnClick == 'btn-1') {
        document.getElementById('caja').style.backgroundColor = '#e53e3e';
    } else if (btnClick == 'btn-2') {
        document.getElementById('caja').style.backgroundColor = '#dd6b20';
    } else if (btnClick == 'btn-3') {
        document.getElementById('caja').style.backgroundColor = '#faf089';
    } else if (btnClick == 'btn-4') {
        document.getElementById('caja').style.backgroundColor = '#48bb78';
    } else if (btnClick == 'btn-5') {
        document.getElementById('caja').style.backgroundColor = '#81e6d9';
    } else if (btnClick == 'btn-6') {
        document.getElementById('caja').style.backgroundColor = '#d53f8c';
    }
}

//Usando un bucle for: en proceso
