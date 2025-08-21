//alert()

true
false

let esMayor = true;

/* let esMenor = confirm("Es menor de edad")
console.log(esMenor); */

// Operadores de comparacion
/* 
<
>
<=
>=
==
===
!=
!==
*/



// Estructuras basicas de programacion
/* let edad = parseInt(prompt("Decime tu edad"));
console.log(edad)

let otro = parseFloat(prompt("ingresa un numero"))
console.log(otro)
// primera estructura
if(edad<=18){
    console.log("El usuario no puede entrar a este lugar")
}

if(edad==18){
    console.log("te dije que no pero te voy a dejar pasar")
}

if(edad==="18"){
    console.log("Solo por que a los 18 sos mayor")
}

console.log("puede pasar") */

let color = "Rojo"
/* if(color == "Rojo"){
    console.log("el color es rojo")
}
console.log("el color no es rojo") */


/* if(color==="Rojo"){
    console.log("el color es rojo")
}else {
    console.log("Es otro color")
}
console.log("ya definimos si es o no rojo") */

/* color = prompt('ingrese un color')
color = color.toLowerCase()
if(color ==="rojo"){
    console.log("el color es rojo")
}else if(color ===  "azul"){
    console.log("el color es azul")
} else if(color === "amarillo"){
    console.log("el color es amarillo")
} else {
    console.log("no es un color primario")
} */

const metodoPago = prompt("ingrese el metodo de pago").toLowerCase();

switch(metodoPago) {
    case 'efectivo': 
        console.log("El metodo de pago es efectivo")
        break
    case 'tarjeta': 
        console.log("El metodo de pago es tarjeta")
        break
    case 'cheque':
        console.log("El metodo de pago es cheque")
        break
    default: 
        console.log("El metodo de pago no es valido")
}
