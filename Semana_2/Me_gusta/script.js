
// var contenedor = document.getElementById("contenedor");
// console.log(contenedor) 

// var clase = document.getElementsByClassName("title");
// console.log(clase);

// var parrafo = document.getElementsByTagName("p");
// console.log(parrafo);

// var querySelector = document.querySelector(".text");
// console.log(querySelector);

// // p.style.color = "red";

// function eventop()
// {
//     var p = document.querySelector("p");
//     // p.style.backgroundColor = "red";
//     // p.style.color = "white";
//     // p.style.borderRadius = "5px";
//     p.classList.add("pClase");
//     // var nombre = p.innerText;
//     p.innerText = "Nuevo texto";
//     // console.log(nombre);
// }

var likes = 0;
function maslikes()
{
    var cant_likes = document.querySelector(".cant-likes")
    console.log(cant_likes);
    var valor = cant_likes.innerText;

    ++valor;

    console.log(valor);
    cant_likes.innerText = valor;
}