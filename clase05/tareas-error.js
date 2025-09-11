// Gestor de Tareas

class Tarea {
  constructor(nombre, completada = false) {
    this.nombre = nombre;
    this.completada = completada;
  }
  marcarCompleta(){
    this.completada = true;
  }
}

class GestorTareas {
    constructor(){
        this.tareas = JSON.parse(localStorage.getItem("tareas")) || []
/*         
        if(JSON.parse(localStorage.getItem('tareas'))){
            this.tareas = []
        }else {
            this.tareas = JSON.parse(localStorage.getItem("tareas"));
        } 
*/
    }
    agregarTarea(nombre){
        console.log(nombre)
        const tarea = new Tarea(nombre);
        this.tareas.push(tarea);
        this.guardar();
    }
    listarTareas(){
        for(let i=0; i<this.tareas.length; i+=1){
            console.log(`${i} - ${this.tareas[i].nombre} - ${this.tareas[i].completada ? "Completada" : "Pendiente"}`);
        }
    }
/*     completarTarea(i){
        console.log(this.tareas[i])
        if(this.tareas[i]) {
            this.tareas[i].marcarCompleta;
            this.guardar();
        }
    } */
    guardar(){
        localStorage.setItem('tareas', JSON.stringify(this.tareas))
    }

}


const gestor = new GestorTareas();
gestor.agregarTarea("Comprar leche");
gestor.agregarTarea("Pasear al perro");
gestor.listarTareas();
//gestor.completarTarea(0);
gestor.listarTareas();
