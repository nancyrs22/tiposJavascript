function existeElemento(arreglo, elemento)
{
    var existe = false;

    for(i = 0; i < arreglo.length; i++)
    {
        if(elemento == arreglo[i])
        {
            existe = true;
        }
    }
    return existe;
}

var arreglo = [1,2,3,4,5,6]
var existe = existeElemento(arreglo, 6);
console.log(existe);
