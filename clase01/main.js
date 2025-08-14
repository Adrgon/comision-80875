/*
Algoritmo -> script
1. Pida el nombre de usuario
2. Pida un numero
3. Pida otro numero
4. Muestre en consola
    . suma
    . resta
    . multiplicacion
    . division
5. Muestre un alert con el mensaje
"Hola [nombre], la suma de tus numer es [resultado]"
*/

let nombreUsuario
let numero1
let numero2

nombreUsuario = prompt("ingresa el nombre de usuario")
numero1 = parseInt(prompt("Ingrese un numero"))
numero2 = parseInt(prompt("Ingrese otro numero"))

let suma = numero1 + numero2
console.log(typeof suma)

let resta = numero1 - numero2
let multiplicacion = numero1 * numero2
let division = numero1 / numero2

console.log(suma)
console.log(resta)
console.log(multiplicacion)
console.log(division)

alert("Hola " + nombreUsuario + ", la suma de tus numeros es " + suma);
alert("Hola " + nombreUsuario + ", la suma de tus numeros es " + resta);
alert("Hola " + nombreUsuario + ", la suma de tus numeros es " + multiplicacion);
alert("Hola " + nombreUsuario + ", la suma de tus numeros es " + division); 
