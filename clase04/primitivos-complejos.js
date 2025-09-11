// Estructuras de datos
// Datos

// Tipos primitivos
// number, string, boolean, null, undefined, symbol, bigint
console.log(typeof 42) // number
console.log(typeof 'Hola') // string
console.log(typeof true) // boolean
console.log(typeof null) // object (esto es un error histórico de JavaScript)
console.log(typeof undefined) // undefined
console.log(typeof Symbol('sym')) // symbol
console.log(typeof 9007199254740991n) // bigint

let a = 10;
let b = a
console.log(a); // 10
console.log(b); // 10
console.log("------")
a = 20;
console.log(a); // 20
console.log(b); // 10
console.log("------");
// compian por valor

// Tipos Complejos (Evolucionados)
// function
// object

const obj1 = {x:10, y:20}
obj1 = {};
let obj2 = obj1
console.log(obj1);
console.log(obj2);
console.log("------")
obj1.x = 30
console.log(obj1); // 30
console.log(obj2); // 30
console.log("------")
// array y objetos literales
// copian por referencia
