const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 2 },
  { nombre: "Pantalón", precio: 80, cantidad: 10 },
  { nombre: "Zapatos", precio: 120, cantidad: 5 },
];

const indice = carrito.findIndex((item) => item.nombre === "Medias");
const otro = carrito.findIndex((item) => item.nombre === "Camisa");

console.log(indice)
console.log(otro)
