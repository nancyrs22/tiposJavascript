function custom() {
    // podemos incluir más código aquí si queremos
    console.log("este mensaje proviene de script.js");
}

function ejemplo(elemento) {
    console.log("elemento clickeado", elemento);
}

function turnOff(element) {
    element.innerText = "Off";
}

function ocultar(elemento) {
    elemento.remove();
}