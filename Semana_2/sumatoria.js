function sumatoria(arreglo)
{  
    var suma = 0;

    for(i = 0; i < arreglo.length; i++)
    {
        suma += arreglo[i];    
    }
    console.log(suma);
}

function numMayor(arreglo)
{
    var mayor = arreglo[0];

    for(i = 0; i < arreglo.length; i++)
    {
          if(mayor < arreglo[i])
          {
              mayor = arreglo[i]
          }
    }
    return mayor;
}

var arreglo = [1,2,3,4,5,6];
var arreglo2 = [-6, 1, 200, 45, 32, 485];

sumatoria(arreglo);
var nM = numMayor(arreglo2)
console.log(nM);