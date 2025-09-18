const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 2 },
  { nombre: "Pantalón", precio: 80, cantidad: 10 },
  { nombre: "Zapatos", precio: 120, cantidad: 5 },
];


const res = carrito.filter( item => item.precio > 120)
console.log(res)
console.log(carrito)
