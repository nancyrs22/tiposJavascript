var estudiante = {
    nombre : "Juan",
    apellido : "Perez",
    edad : 25,
    hobbies : ["Leer", "Ejercicio", "Ver pelis"],
    InfoCompleta : function(){
        console.log(this.nombre);
        console.log(this.apellido);
        console.log(this.edad);
    },
}

// console.log(estudiante.nombre);
console.log(estudiante);
estudiante.InfoCompleta();
console.table(estudiante);