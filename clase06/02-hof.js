// Tipo 2
// HOF
// Retornan una funcion

function crearFuncionDeSaludo(tipoSaludo){
    return function(nombre){
        console.log(tipoSaludo + " " + nombre)
    }
}

const sayHello = crearFuncionDeSaludo("Hello");
const sayGoodBye = crearFuncionDeSaludo("GoodBye");
const decirHola = crearFuncionDeSaludo("Hola");
const decirAdios = crearFuncionDeSaludo("Adios")

decirHola("Joaquin");
sayHello("Joaquin")
decirAdios("Nicolas")
sayGoodBye("Nicolas")
