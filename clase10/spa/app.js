import { Navegacion } from './modules/navigation.js'
import { Router } from './modules/router.js'
import { Paginas } from './modules/pages.js';

class MiSPA {
    constructor(){
        this.router = new Router()
        this.paginas = new Paginas()
        this.navegacion = new Navegacion()

        this.configurar()
    }
    configurar(){
        this.configurarRutas()

        this.navegacion.router = this.router

        this.router.iniciar()
    }
    configurarRutas(){
      // Ruta de inicio
      this.router.agregarRuta("inicio", () => {
        this.paginas.mostrarInicio();
      });

      // Ruta de acerca de
      this.router.agregarRuta("acerca", () => {
        this.paginas.mostrarAcerca();
      });

      // Ruta de contacto
      this.router.agregarRuta("contacto", () => {
        this.paginas.mostrarContacto();
      });

      this.router.agregarRuta("*", () => {
        console.log("❓ Página no encontrada, redirigiendo a inicio");
        this.router.irA("inicio");
      });
    }
    irAPagina(pagina){
        this.router.irA(pagina)
    }

}


function iniciarApp() {
  console.log("🌟 DOM cargado, creando aplicación...");

  // Crear la aplicación
  const app = new MiSPA();

  // Hacer la aplicación disponible globalmente para debugging
  window.miApp = app;

  console.log("🎉 ¡Aplicación creada! Usa window.miApp para acceder a ella");
}

document.addEventListener('DOMContentLoaded', iniciarApp);
