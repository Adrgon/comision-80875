//alert()
//Funciones de orden superior

// ciudadanos de primera clase

/* const miFuncion = function(){
    console.log("hola mundo")
}

miFuncion() 

console.log(typeof miFuncion) */

// Existen dos fomrmas de identificar un Hight Order Function hof

// 1. Recibe una funcion como argumento

function sumar(){
    console.log(2+2)
}


function ejecutarAccion(callback){
    console.log("Ejecutando una accion")
    callback();
    //1()
    //"hola"()
    //sumar()
}



//ejecutarAccion(1)
//ejecutarAccion("hola")
ejecutarAccion(sumar)
