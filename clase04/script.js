let obj = {};
console.log(obj);
console.log(typeof obj)

// para que los objetos
let nombreProducto = "Monitor 20 pulgadas";
let precioProducto = 150000;
let disponibleProducto = true;

let fotos = []

// una estructura de datos que agrupe la entidad
let producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 150000,
    disponible: true,
}

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto["nombre"]);
console.log(producto["precio"]);
console.log(producto["disponible"]);

// agrgegar propiedades
producto.imagenPricipal = "imagen.jpg"
console.table(producto);

// cambiar valores
producto["precio"] = 200000
console.table(producto);

producto.fotos = ["imagen1.jpg", "imagen2.jpg"]
console.log(producto);
console.log(producto.fotos[1])



let producto2 = {
    nombre: "Televisor 50 pulgadas",
    precio: 500000,
    disponible: true,
    fotos: ["tv1.jpg", "tv2.jpg"],
    categoria: {
        nombre: "Electrónica",
        descripcion: "Productos de electrónica y tecnología"
    }
}

console.log(producto2)

let productos = [
    {nombre: "arroz", precio: 1500},
    {nombre: "fideos",precio: 2000},
    {nombre: "azucar", precio: 1000}
]

console.log(productos)


const vehiculo1 = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Rojo"
}

const vehiculo2 = {
    puertas: 4,
    motor: "diesel",
    velisidad: "200km/h"
}

const vehiculos = [vehiculo1, vehiculo2]
console.log(vehiculos)
