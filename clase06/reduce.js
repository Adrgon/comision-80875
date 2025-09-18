const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 2 },
  { nombre: "Pantalón", precio: 80, cantidad: 10 },
  { nombre: "Zapatos", precio: 120, cantidad: 5 },
];
const deuda = 1000

const resultado = carrito.reduce( (total, item)=> total + (item.precio * item.cantidad),deuda)
console.log(resultado)

let total = deuda
carrito.forEach(item => total += item.precio * item.cantidad)
console.log(total)
