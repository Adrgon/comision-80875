//alert()

// funciones constructoras

function Persona(n, e){
    this.nombre = n;
    this.edad = e;

    this.cumplirAnios= function(){
    this.edad +=1
  }
}

//const leonardo = {};
/* 
const leonardo = {
    nombre: "Leonardo", 
    edad: 30
}
console.log(leonardo) 
*/

let alumnos = []

for(let i=0; i<= 1; i+=1){
let nombre = prompt("Ingrese suu nombre");
let edad = parseInt(prompt("Ingrese su edad"));
const alumno = new Persona(nombre, edad);
alumnos.push(alumno)
}

console.table(alumnos)

alumnos[0].cumplirAnios()

console.table(alumnos)

//console.log(Persona)

/* const leonardo = {
  nombre: "Leonardo",
  edad: 30,
  cumplirAnios: function(){
    this.edad +=1
  }
};

console.log(leonardo.nombre)
console.log(leonardo.edad)
leonardo.cumplirAnios()
console.log(leonardo.nombre);
console.log(leonardo.edad); */
