function promedio(arreglo)
{  
    var suma = 0;
    var prom = 0;
    for(i = 0; i < arreglo.length; i++)
    {
        suma += arreglo[i];    
    }
    prom = suma/arreglo.length;
    return prom;
}

var arreglo = [1,2,3,4,5,6];
var prom = promedio(arreglo);
console.log(prom);