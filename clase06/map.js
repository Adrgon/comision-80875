const numeros = [1,2,3,4,5,6,7,8,9,10];

const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 2 },
  { nombre: "Pantalón", precio: 80, cantidad: 10 },
  { nombre: "Zapatos", precio: 120, cantidad: 5 },
];


let x2 = numeros.map(num => num * 2)
console.log(numeros);
console.log(x2)


const carritoConImpuesto = carrito.map( item => ({
    nombre: item.nombre,
    precio: item.precio,
    precioIva : item.precio * 1.21,
    cantidad : item.cantidad

}))
console.log(carrito)
console.log(carritoConImpuesto)
