function validar() {

    var usu = document.getElementById("usuario").value;
    var clave = document.getElementById("clave").value;

    if (usu == "valen" && clave == "1234") {
        window.location.href = "sistema.html";
    } else {
        alert("Usuario incorrecto");
    }

}

//funcion limpiar
function limpiar() {
    document.getElementById("usuario").value = "";
    document.getElementById("clave").value = "";
}

//funcion para reservar

function reservar() {
    var ema = document.getElementById("email").value;
    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("personas").value = "";
    document.getElementById("email").value = "";

    if (ema == "cliente@gmail.com") {
        document.getElementById("resultado3").textContent = "CLIENTE YA TIENE RESERVA";
    } else {
        document.getElementById("resultado3").textContent = "RESERVA REALIZADA";
    }

}


function cotizar() {

    var pla = document.getElementById("plato").value;
    var beb = document.getElementById("bebida").value;

    if (pla == "1" && beb == "1") {
        document.getElementById("resultado4").textContent = "8500 pesos";
    }

    if (pla == "1" && beb == "2") {
        document.getElementById("resultado4").textContent = "9500 pesos";
    }

    if (pla == "1" && beb == "3") {
        document.getElementById("resultado4").textContent = "9000 pesos";
    }
    if (pla == "1" && beb == "4") {
        document.getElementById("resultado4").textContent = "9800 pesos";
    }

    if (pla == "2" && beb == "1") {
        document.getElementById("resultado4").textContent = "7000 pesos";
    }

    if (pla == "2" && beb == "2") {
        document.getElementById("resultado4").textContent = "8000 pesos";
    }

    if (pla == "2" && beb == "3") {
        document.getElementById("resultado4").textContent = "7500 pesos";
    }
    if (pla == "2" && beb == "4") {
        document.getElementById("resultado4").textContent = "8500 pesos";
    }

    if (pla == "3" && beb == "1") {
        document.getElementById("resultado4").textContent = "9000 pesos";
    }

    if (pla == "3" && beb == "2") {
        document.getElementById("resultado4").textContent = "10000 pesos";
    }

    if (pla == "3" && beb == "3") {
        document.getElementById("resultado4").textContent = "9500 pesos";
    }
    if (pla == "3" && beb == "4") {
        document.getElementById("resultado4").textContent = "10500 pesos";
    }

    if (pla == "4" && beb == "1") {
        document.getElementById("resultado4").textContent = "8000 pesos";
    }

    if (pla == "4" && beb == "2") {
        document.getElementById("resultado4").textContent = "9000 pesos";
    }

    if (pla == "4" && beb == "3") {
        document.getElementById("resultado4").textContent = "8500 pesos";
    }
    if (pla == "4" && beb == "4") {
        document.getElementById("resultado4").textContent = "9500 pesos";
    }

}
function limpiarCotizacion() {

    document.getElementById("resultado4").textContent = "";

    document.getElementById("plato").value = "1";

    document.getElementById("bebida").value = "1";

}

function enviar() {
    document.getElementById("nombre2").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mensaje").value = "";
    document.getElementById("resultado5").textContent = "MENSAJE ENVIADO";
}

function limpiarContacto() {
    document.getElementById("nombre2").value = "";
    document.getElementById("telefono").value = "";
    document.getElementById("mensaje").value = "";
}

