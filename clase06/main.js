let marca = prompt("Ingrese la marca del auto que busca, por ejemplo: Audi, BMW, Ford, Dodge, Chevrolet, Mercedes Benz")
let year = parseInt(prompt("Ingrese el año del auto que busca, por ejemplo: 2017, 2018, 2019, 2020, 2021"))
let minimo = parseInt(prompt("Ingrese el precio minimo del auto que busca, por ejemplo: 50000"))
let maximo = parseInt(prompt("Ingrese el precio maximo del auto que busca, por ejemplo: 100000"))


const datosBusqueda = {
  marca,
  year,
  minimo,
  maximo,
  puertas: 4
}


function mostrarAutos(cars){
  cars.forEach(car => {
    console.log(
      car.marca + " " +
      car.modelo + " " +
      car.year + " " +
      car.puertas + " puertas " +
      car.transmision + " " +
      "$" + car.precio.toLocaleString() + " " +
      car.color
    )
  })
}

function filtrarMarca(auto){
  if(datosBusqueda.marca){
    return auto.marca === datosBusqueda.marca
  }
  return auto
}


function filtrarYear(auto) {
  if (datosBusqueda.year) {
    return auto.year === datosBusqueda.year;
  }
  return auto;
}

function filtrarMinimo(auto) {
  if (datosBusqueda.minimo) {
    return auto.precio >= datosBusqueda.minimo;
  }
  return auto;
}

function filtrarMaximo(auto) {
  if (datosBusqueda.maximo) {
    return auto.precio <= datosBusqueda.maximo;
  }
  return auto;
}

function filtrarPuertas(auto) {
  if (datosBusqueda.puertas) {
    return auto.puertas >= datosBusqueda.puertas;
  }
  return auto;
}

function filtrarAutos(){
  const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas)
  if(resultado.length > 0){
    mostrarAutos(resultado)
  }
}

filtrarAutos()

//mostrarAutos()
