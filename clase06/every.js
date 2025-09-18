const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 2 },
  { nombre: "Pantalón", precio: 80, cantidad: 10 },
  { nombre: "Zapatos", precio: 120, cantidad: 5 },
  { nombre: "Camisa", precio: 90, cantidad: 1 },
];


const res = carrito.every( item => item.precio < 121)
console.log(res)
