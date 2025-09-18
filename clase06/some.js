const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

const carrito = [
  { nombre: "Camisa", precio: 50, cantidad: 2 },
  { nombre: "Pantalón", precio: 80, cantidad: 10 },
  { nombre: "Zapatos", precio: 120, cantidad: 5 },
];

/* function existe(mes){
    if(mes === "Enero"){
        console.log("El mes de enero si existe")
    }
} */

//meses.forEach(existe) // HOF

/* meses.forEach(function(mes) {
  if (mes === "Enero") {
    console.log("El mes de enero si existe");
  }
}); */

/* meses.forEach((mes) =>{
  if (mes === "Enero") {
    console.log("El mes de enero si existe");
  }
}); */


/* meses.forEach( mes => {
  if (mes === "Enero") {
    console.log("El mes de enero si existe");
  }
}); */

/* meses.forEach((mes) => mes === "Enero" ? console.log("El mes de enero existe") : null); */

/* meses.forEach((mes) =>
  mes === "Enero" ? console.log("El mes de enero existe") : null
); */

/* let algo = meses.forEach((mes) =>
  mes === "Enero" ? console.log("El mes de enero existe") : null
);
console.log(algo) */


// some

const existe = meses.some((mes)=> mes === "Enero")
console.log(existe);

const existe2 = carrito.some((producto)=> producto.nombre === "Camisa")
console.log(existe2)
console.log(carrito)
