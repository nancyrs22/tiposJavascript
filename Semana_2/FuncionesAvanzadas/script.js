//Funcion flecha

var sumatoriaFlecha = (parametro1, parametro2) => parametro1+parametro2;

var helloWorld = nombre => console.log("Hello World " + nombre);

// var sum = sumatoriaFlecha(1,2);
// console.log(sum);
// helloWorld("Nancy");

var nums = [2,3,5,6,7];

for(var i= 0; i<nums.length; i++)
{
    console.log(nums[i]);
}

nums.forEach(function (num){
    console.log(num);
});