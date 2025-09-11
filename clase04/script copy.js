let obj = {} // objeto literal
let arr = [] // array

let funcion = function(){}
console.log(funcion)
console.log(typeof funcion)
console.log("------------")
console.log(obj);
console.log(typeof obj);
console.log(arr);
console.log(typeof arr)

// arreglos
let arr1 = [1,2,3]
let arr2 = ["Rebeca", "Tobias", "Alejandro", "Ana", "Julian", "Sofia"];
let arr3 = [true, false, false, false, true]
let arr4 = [1, "Rebeca", true, null, undefined, Symbol("sym"), 9007199254740991n, {}, []]

// objetivo de los array
let alumno1 = "Rebeca"
let alumno2 = "Tobias"
let alumno3 = "Alejandro"
let alumno4 = "Ana"
let alumno5 = "Julian"
let alumno6 = "Sofia"
const alumnos = ["Rebeca", "Tobias", "Alejandro", "Ana", "Julian", "Sofia", "Joaquin"];


console.log("-----variables------")
console.log(alumno1);
console.log(alumno2);
console.log(alumno3);
console.log(alumno4);
console.log(alumno5);
console.log(alumno6)
console.log("---Array--------")
console.log(alumnos)
console.log("---Array--------");
console.log(alumnos)
console.log(alumnos[0]);
console.log(alumnos[1]);
console.log(alumnos[2]);
console.log(alumnos[3]);
console.log(alumnos[4]);
console.log(alumnos[5]);
console.log("------for-------");
for(let i=0; i<alumnos.length; i+=1){
    console.log(alumnos[i]);
}

// Los podemos dividier en dos grandes grupos
// metodos anteriores al 2015
/*
push, 
pop, 
shift, 
unshift, 
splice, 
slice, 
indexOf, 
join, 
reverse, 
sort, 
concat
*/

alumnos.push("Yefreson")
console.table(alumnos)
alumnos.pop()
console.table(alumnos);

alumnos.unshift("Yefreson")
console.table(alumnos)

alumnos.shift()
console.table(alumnos)

/* alumnos.splice(2, 3)
console.table(alumnos) */

let parte = alumnos.slice(1, 4)
console.table(parte);
console.table(alumnos) 



/* alumnos = alumnos.slice(1, 4);
console.table(alumnos); */

let indiceAlumno = alumnos.indexOf("Ana")
console.log(indiceAlumno);

let strAlumnos = alumnos.join(",")
console.log(strAlumnos);


const existeAna = alumnos.includes("Adrian");
console.log(existeAna)
// metodos posteriores al 2015 (Hight Order Functions - HOF)
// los vemos mas adelante
