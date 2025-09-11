
class SuperHeroes {
    constructor(name, power, alterEgo){
        this.name = name;
        this.power = power;
        this.alerEgo = alterEgo;
    }
    atacar(){
        console.log(this.name + " Atacando con " + this.power)
    }

}

const sumperMan = new SuperHeroes("Superman", "Super Fuerza", "Clark Kent");
console.log(sumperMan);

const batman = new SuperHeroes("Batman", "Dinero", "Bruce Wayne");
console.log(batman);

batman.atacar();
