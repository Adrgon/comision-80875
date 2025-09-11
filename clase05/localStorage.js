//TLD: TOP LEVEL DOMAIN

let hijos = ["Lucas", "Agustin", "Kiara", "Daiana"]
let obj = {
    bebida: "Coca Cola",
    comida: "Pizza",
    postre: "Helado"
}

/* 
localStorage.setItem("nombre", "Adrian");
localStorage.setItem("edad", 49);
localStorage.setItem('esHombre', true);
localStorage.setItem('hijos', hijos);
localStorage.setItem('datos', JSON.stringify(obj)); 
*/ 




/* sessionStorage.setItem("nombre", "Adrian");
sessionStorage.setItem("edad", 49);
sessionStorage.setItem('esHombre', true);
sessionStorage.setItem('hijos', hijos);
sessionStorage.setItem('datos', obj);   */

let nombre = localStorage.getItem('nombre')
let edad = Number(localStorage.getItem('edad'))
let esHombre = localStorage.getItem("esHombre") === "true";
let Hombre = localStorage.getItem("esHombre");
let hijosLS = localStorage.getItem('hijos').split(",")
let datosLS = JSON.parse(localStorage.getItem('datos'))

console.log(typeof nombre, nombre);
console.log(typeof edad, edad);
console.log("cumplio " + (edad + 1))

console.log(typeof esHombre, esHombre);
console.log(typeof Hombre, Hombre);

console.log(typeof hijosLS, hijosLS);
console.log(hijosLS[2]);

console.log(typeof datosLS, datosLS);
console.log(datosLS.bebida)


let bebidas = [
    { bebida: "coca cola", comida: "fideos" }, 
    { bebida: "Pepsi", },
];
