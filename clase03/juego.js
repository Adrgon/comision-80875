console.log("Batalla entre Goku y Superman");
console.log("--------------------");

const MIN_POWER = 10;
const MAX_POWER = 30;

let energiaGoku = 100;
let energiaSuperman = 100;

function calcularGolpe(){
    return parseInt(Math.random() * (MAX_POWER - MIN_POWER) + MAX_POWER);
}

function ambosVivos(){
    return energiaGoku > 0 && energiaSuperman > 0
}

function gokuSigueVivo(){
    return energiaGoku > energiaSuperman;
}
/* let golpeSuperman = Number(prompt("Energia de golpe"));
let golpeGoku = Number(prompt("Energia de golpe")); */

let round = 0;
while (ambosVivos()) {
  round += 1;
  console.log("Round " + round);
  let golpeSuperman = calcularGolpe()
  let golpeGoku = calcularGolpe()
  //let golpe = parseInt(Math.random()*100);
  //console.log(golpe)
  if (golpeGoku === golpeSuperman) {
    console.log("No se hacen daño");
  } else if (golpeGoku > golpeSuperman) {
    console.log("Goku golpea con una fuerza de " + golpeGoku);
    energiaSuperman = energiaSuperman - golpeGoku;
  } else {
    console.log("Superman golpea con una fuerza de " + golpeSuperman);
    energiaGoku = energiaGoku - golpeSuperman;
  }
  console.log("--------------------");
}
if (gokuSigueVivo()) {
  console.log("Ganador es Goku");
} else {
  console.log("Ganador es Superman");
}
