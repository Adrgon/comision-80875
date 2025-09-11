// Clase Tarea
class Tarea {
  constructor(nombre, completada = false) {
    this.nombre = nombre;
    this.completada = completada;
  }

  marcarCompleta() {
    this.completada = true;
  }
}

// Manejo de LocalStorage
class GestorTareas {
  constructor() {
    this.tareas = [];
    const objTareas = JSON.parse(localStorage.getItem("tareas")) || [];

// Rehidratación sin map
for (let i = 0; i < objTareas.length; i++) {
  const dato = objTareas[i];
  const tarea = new Tarea(dato.nombre, dato.completada);
  this.tareas.push(tarea);
}
  }

  agregarTarea(nombre) {
    const tarea = new Tarea(nombre);
    this.tareas.push(tarea);
    this.guardar();
  }

  listarTareas() {
    this.tareas.forEach((t, i) => {
      console.log(`${i + 1}. ${t.nombre} - ${t.completada ? "✅" : "❌"}`);
    });
  }

  completarTarea(indice) {
    if (this.tareas[indice]) {
      this.tareas[indice].marcarCompleta();
      this.guardar();
    }
  }

  guardar() {
    localStorage.setItem("tareas", JSON.stringify(this.tareas));
  }
}

// Uso de la mini app
const gestor = new GestorTareas();
gestor.agregarTarea("Estudiar funciones constructoras");
gestor.agregarTarea("Repasar clases en JS");
gestor.listarTareas();

gestor.completarTarea(0);
gestor.listarTareas();
