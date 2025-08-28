
function solicitarRadio(){
    let radio;
    do {
        radio = prompt("Ingresar radio del circulo")
    } while (isNaN(radio) || radio <=0)
    return parseFloat(radio);
}

function calcularArea(radio){
    let area = Math.PI * Math.pow(radio, 2)
    return area
}

function mostraResultado(radio, area){
    alert(`El area de un circulo con radio ${radio} es: ${area.toFixed(2)}`)
}


let radioIngresado = solicitarRadio();

let areaCalculada = calcularArea(radioIngresado)

mostraResultado(radioIngresado, areaCalculada)
