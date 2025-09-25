/* let parrafo_1 = document.getElementById('parrafo-1')
console.log(typeof parrafo_1)

parrafo_1.textContent = 'Hola Mundo'
parrafo_1.style.color = 'red' */

// Seccion 1 
const btnID = document.getElementById('btnID')

btnID.addEventListener('click', ()=>{
    //console.log("click en el boton")
    const elemento = document.getElementById('parrafo-1')
    console.log(elemento)

    if(elemento){
        elemento.style.backgroundColor = "#fff999";
        elemento.style.padding = "10px";
        elemento.style.border = "2px solid #ff6b6b";
    }else {
        alert("No se encontro el elemento")
    }
})

// Seccion 2
const btnTag = document.getElementById("btnTag");

btnTag.addEventListener("click", function(){
    const seccion2 = document.getElementById('seccion-2');
    const parrafos = seccion2.getElementsByTagName('p')
    console.log(parrafos)

/*     for(let i=0; i<parrafos.length; i+=1){
        parrafos[i].style.backgroundColor = "#e8f5e8";
        parrafos[i].style.border = "1px solid #4caf50";
        parrafos[i].style.margin = "5px";
        parrafos[i].style.padding = "5px";
    } */

    for(let parrafo of parrafos){
        parrafo.style.backgroundColor = "#e8f5e8";
        parrafo.style.border = "1px solid #4caf50";
        parrafo.style.margin = "5px";
        parrafo.style.padding = "5px";
    }

})


// Seccion 3

function modificarPorClase(){
    const elementosItem = document.getElementsByClassName('item')
    console.log('Elementos con clase "item"', elementosItem);
    console.log('Cantidad', elementosItem.length)

    for(let elemento of elementosItem){
        elemento.style.backgroundColor = "#e0f7fa";
        elemento.style.border = "2px solid #00bcd4";
        elemento.style.padding = "8px";
        elemento.style.boderRadius = '5px'
    }
}

const btnClass = document.getElementById("btnClass");

btnClass.addEventListener("click", modificarPorClase)



// Seccion 4 
const botonesSeccion4 = document.querySelectorAll('#seccion-4 button')
console.log(botonesSeccion4)
const botonQuerySelector = botonesSeccion4[0]
const botonQuerySelectorAll = botonesSeccion4[1]

botonQuerySelector.addEventListener('click', ()=>{
    const elemento = document.querySelector('#lista-frutas .favorita')
    console.log(elemento)
    if(elemento){
        elemento.style.backgroundColor = "#f8d7da";
        elemento.style.border = "2px solid #dc3545";
        elemento.style.padding = "5px";
        elemento.style.fontWeight = "bold";
    }    
        

})

botonQuerySelectorAll.addEventListener('click', ()=>{
    const frutas = document.querySelectorAll('.fruta')

    frutas.forEach((fruta, index) => {
            const colores = ["#d1ecf1", "#d4edda", "#fff3cd"];
            const bordes = ["#040405ff", "#c3e6cb", "#ffeeba"];
            //console.log(index % colores.length);
            //console.log(index % bordes.length);
                fruta.style.backgroundColor = colores[index % colores.length];
                fruta.style.border = `2px solid ${
                  bordes[index % bordes.length]
                }`;
                fruta.style.padding = "8px";
                fruta.style.margin = "3px";
                fruta.style.borderRadius = "3px";
    
        })
})


// Seccion 5
const botonesSeccion5 = document.querySelector('#seccion-5 button')

 botonesSeccion5.addEventListener('click', ()=>{
    const hijoCentral = document.getElementById('hijo-central')
    
    if(hijoCentral){
        const padre = hijoCentral.parentNode
        console.log(padre)
        const hermanoAnterior = hijoCentral.previousElementSibling
        const hermanoSiguiente = hijoCentral.nextElementSibling

        padre.style.border = "2px solid #6f42c1"
        padre.style.padding = "10px"

        hijoCentral.style.backgroundColor = "#007bff";
        hijoCentral.style.color = "white";
        hijoCentral.style.padding = "10px";

        if (hermanoAnterior) {
          hermanoAnterior.style.backgroundColor = "#28a745";
          hermanoAnterior.style.color = "white";
          hermanoAnterior.style.padding = "10px";
        }

        if (hermanoSiguiente) {
          hermanoSiguiente.style.backgroundColor = "#ffc107";
          hermanoSiguiente.style.padding = "10px";
        }
    }
}) 


// Seccion 6

const botonesSeccion6 = document.querySelectorAll('#seccion-6 button')
const btnInnerHTML = botonesSeccion6[0]
const btnTextContent = botonesSeccion6[1];
const btnInnerText = botonesSeccion6[2]
const btnRestaurar = botonesSeccion6[3];
const btnLeer = botonesSeccion6[4]

btnInnerHTML.addEventListener('click', ()=>{
    const contenedor = document.getElementById("contenido-manipulable");

    contenedor.innerHTML = `
    <h3>Contenido modificado con innerHTML</h3>
    <p>Este contenido fue agregado usando <strong>innerHTML</strong>.</p>
    <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>
    `
})

btnTextContent.addEventListener("click", () => {
  const contenedor = document.getElementById("contenido-manipulable");

  contenedor.textContent = `
    <h3>Contenido modificado con innerHTML</h3>
    <p>Este contenido fue agregado usando <strong>innerHTML</strong>.</p>
    <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>
    `;
});

btnInnerText.addEventListener("click", () => {
  const contenedor = document.getElementById("contenido-manipulable");

  contenedor.innerText = `
    <h3>Contenido modificado con innerHTML</h3>
    <p>Este contenido fue agregado usando <strong>innerHTML</strong>.</p>
    <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>
    `;
});

btnLeer.addEventListener("click", () => {
    const seccion6 = document.querySelector("#seccion-6");
    alert(seccion6.innerText)
})


// seccion 7

const botonesSeccion7 = document.querySelectorAll("#seccion-7 button");
const btnAtributos = botonesSeccion7[0];
const btnClases = botonesSeccion7[1];

    function crearAreaResultados7() {
      const seccion7 = document.getElementById("seccion-7");
      let resultadoDiv = seccion7.querySelector(".resultado-seccion");

      if (!resultadoDiv) {
        resultadoDiv = document.createElement("div");
        resultadoDiv.className = "resultado-seccion";
        resultadoDiv.style.marginTop = "15px";
        resultadoDiv.style.padding = "10px";
        resultadoDiv.style.backgroundColor = "#e2e3e5";
        resultadoDiv.style.border = "1px solid #c6c8ca";
        resultadoDiv.style.borderRadius = "5px";
        seccion7.querySelector(".ejemplo").appendChild(resultadoDiv);
      }
      return resultadoDiv;
    }


// Evento para modificar atributos
btnAtributos.addEventListener("click", function () {
  console.log("=== SECCIÓN 7A: Manipulación de Atributos ===");

  const imagen = document.getElementById("imagen-demo");
  const input = document.getElementById("input-demo");

  // Cambiar atributos de la imagen
  imagen.setAttribute(
    "src",
    "https://es.web.img3.acsta.net/c_310_420/pictures/14/02/11/12/56/318203.jpg"
  );
  imagen.setAttribute("alt", "Nueva imagen de demostración");
  imagen.style.border = "8px solid #28a745";

  // Cambiar atributos del input
  input.setAttribute("placeholder", "Placeholder modificado con setAttribute");
  input.setAttribute("title", "Este título fue añadido dinámicamente");
  input.style.borderColor = "#007bff";
  input.style.borderWidth = "2px";

  const resultadoDiv = crearAreaResultados7();
  
  resultadoDiv.innerHTML = `
            <strong>✅ Manipulación de Atributos</strong><br>
            <strong>Métodos usados:</strong><br>
            • setAttribute('src', 'nueva-url') - Cambiar fuente de imagen<br>
            • setAttribute('alt', 'nuevo-alt') - Cambiar texto alternativo<br>
            • setAttribute('placeholder', 'nuevo-texto')<br>
            • setAttribute('title', 'nuevo-título')<br>
            <br><strong>Valores actuales:</strong><br>
            • Imagen src: ${imagen.getAttribute("src").substring(0, 50)}...<br>
            • Input placeholder: "${input.getAttribute("placeholder")}"
        `;
  resultadoDiv.style.backgroundColor = "#d4edda";
  resultadoDiv.style.borderColor = "#c3e6cb";

  // Agregar botón para restaurar
  const btnRestaurar = document.createElement("button");
  btnRestaurar.textContent = "Restaurar Atributos Originales";
  btnRestaurar.style.marginTop = "10px";
  btnRestaurar.style.backgroundColor = "#17a2b8";
  btnRestaurar.style.color = "white";
  btnRestaurar.style.border = "none";
  btnRestaurar.style.padding = "5px 10px";
  btnRestaurar.style.borderRadius = "3px";
  btnRestaurar.style.cursor = "pointer";

  btnRestaurar.addEventListener("click", function () {
    imagen.setAttribute(
      "src",
      "https://portaluchile.uchile.cl//.imaging/default/dam/imagenes/Uchile/imagenes-noticias/155428_2_icei-5-800-l_L/jcr:content.jpg"
    );
    imagen.setAttribute("alt", "Imagen de demostración");
    imagen.style.border = "";
    input.setAttribute("placeholder", "Escribe algo aquí");
    input.removeAttribute("title");
    input.style.borderColor = "";
    input.style.borderWidth = "";

    resultadoDiv.innerHTML = `
                <strong>✅ Atributos Restaurados</strong><br>
                • Imagen vuelve a la URL original<br>
                • Input placeholder restaurado<br>
                • Bordes eliminados<br>
                • removeAttribute('title') - Elimina atributo
            `;
    resultadoDiv.style.backgroundColor = "#f8f9fa";
    btnRestaurar.remove();
  });

  resultadoDiv.appendChild(btnRestaurar);
});

// Evento para manipular clases
btnClases.addEventListener("click", function () {
  console.log("=== SECCIÓN 7B: Manipulación de Clases CSS ===");

  const elementos = document.querySelectorAll("#seccion-7 .ejemplo *");

  elementos.forEach((elemento, index) => {
    // Agregar clases dinámicamente
    if (index % 2 === 0) {
      elemento.classList.add("resaltado-par");
    } else {
      elemento.classList.add("resaltado-impar");
    }

    // Alternar clase adicional
    elemento.classList.toggle("animacion");
  });

  const resultadoDiv = crearAreaResultados7();
  resultadoDiv.innerHTML = `
            <strong>✅ Manipulación de Clases CSS</strong><br>
            <strong>Métodos classList:</strong><br>
            • classList.add('clase') - Agregar clase<br>
            • classList.remove('clase') - Quitar clase<br>
            • classList.toggle('clase') - Alternar clase<br>
            • classList.contains('clase') - Verificar si tiene clase<br>
            <br><strong>Clases aplicadas:</strong><br>
            • Elementos pares: resaltado-par<br>
            • Elementos impares: resaltado-impar<br>
            • Todos: animacion (toggle)
        `;
  resultadoDiv.style.backgroundColor = "#fff3cd";
  resultadoDiv.style.borderColor = "#ffeaa7";

  // Agregar botón para limpiar clases
  const btnLimpiar = document.createElement("button");
  btnLimpiar.textContent = "Limpiar Clases CSS";
  btnLimpiar.style.marginTop = "10px";
  btnLimpiar.style.backgroundColor = "#dc3545";
  btnLimpiar.style.color = "white";
  btnLimpiar.style.border = "none";
  btnLimpiar.style.padding = "5px 10px";
  btnLimpiar.style.borderRadius = "3px";
  btnLimpiar.style.cursor = "pointer";

  btnLimpiar.addEventListener("click", function () {
    elementos.forEach((elemento) => {
      elemento.classList.remove(
        "resaltado-par",
        "resaltado-impar",
        "animacion"
      );
    });

    resultadoDiv.innerHTML = `
                <strong>✅ Clases CSS Limpiadas</strong><br>
                • classList.remove() ejecutado<br>
                • Todas las clases dinámicas eliminadas<br>
                • Elementos vuelven a su estado original
            `;
    resultadoDiv.style.backgroundColor = "#f8f9fa";
    btnLimpiar.remove();
  });

  resultadoDiv.appendChild(btnLimpiar);
});


// Seccion 8

// ============================================
// SECCIÓN 8: CREACIÓN Y ELIMINACIÓN DE ELEMENTOS
// ============================================

let contadorElementos = 0;

// Buscar los botones de la sección 8 (defer garantiza que DOM esté listo)
    const botonesSeccion8 = document.querySelectorAll('#seccion-8 button');
    const btnCrear = botonesSeccion8[0];
    const btnEliminar = botonesSeccion8[1];
    const btnInsertar = botonesSeccion8[2];
    
    // Función para crear área de resultados
    function crearAreaResultados8() {
        const seccion8 = document.getElementById('seccion-8');
        let resultadoDiv = seccion8.querySelector('.resultado-seccion');
        
        if (!resultadoDiv) {
            resultadoDiv = document.createElement('div');
            resultadoDiv.className = 'resultado-seccion';
            resultadoDiv.style.marginTop = '15px';
            resultadoDiv.style.padding = '10px';
            resultadoDiv.style.backgroundColor = '#e2e3e5';
            resultadoDiv.style.border = '1px solid #c6c8ca';
            resultadoDiv.style.borderRadius = '5px';
            seccion8.querySelector('.ejemplo').appendChild(resultadoDiv);
        }
        return resultadoDiv;
    }
    
    // Evento para crear elemento
    btnCrear.addEventListener('click', function() {
        console.log('=== SECCIÓN 8A: Crear Elemento ===');
        
        const contenedor = document.getElementById('contenedor-dinamico');
        
        // Crear nuevo elemento
        const nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'elemento-dinamico';
        nuevoDiv.textContent = `Elemento creado dinámicamente #${++contadorElementos}`;
        nuevoDiv.style.backgroundColor = '#e8f4fd';
        nuevoDiv.style.border = '1px solid #007bff';
        nuevoDiv.style.padding = '10px';
        nuevoDiv.style.margin = '5px';
        nuevoDiv.style.borderRadius = '5px';
        
        // Añadir al contenedor
        contenedor.appendChild(nuevoDiv);
        
        const resultadoDiv = crearAreaResultados8();
        resultadoDiv.innerHTML = `
            <strong>✅ Elemento Creado y Agregado</strong><br>
            <strong>Métodos usados:</strong><br>
            • createElement('div') - Crea elemento en memoria<br>
            • textContent - Añade texto al elemento<br>
            • appendChild() - Agrega al final del contenedor<br>
            <br><strong>Elemento creado:</strong><br>
            • Texto: "${nuevoDiv.textContent}"<br>
            • Clase: ${nuevoDiv.className}<br>
            • Total de elementos: ${contenedor.children.length}
        `;
        resultadoDiv.style.backgroundColor = '#d4edda';
        resultadoDiv.style.borderColor = '#c3e6cb';
        
        console.log('Elemento creado:', nuevoDiv);
    });
    
    // Evento para eliminar elemento
    btnEliminar.addEventListener('click', function() {
        console.log('=== SECCIÓN 8B: Eliminar Elemento ===');
        
        const contenedor = document.getElementById('contenedor-dinamico');
        const elementos = contenedor.querySelectorAll('.elemento-dinamico');
        
        if (elementos.length > 0) {
            const ultimoElemento = elementos[elementos.length - 1];
            const textoEliminado = ultimoElemento.textContent;
            
            // Remover elemento
            contenedor.removeChild(ultimoElemento);
            
            const resultadoDiv = crearAreaResultados8();
            resultadoDiv.innerHTML = `
                <strong>✅ Elemento Eliminado</strong><br>
                <strong>Métodos usados:</strong><br>
                • querySelectorAll('.elemento-dinamico')<br>
                • removeChild() - Elimina elemento del DOM<br>
                <br><strong>Elemento eliminado:</strong><br>
                • "${textoEliminado}"<br>
                • Elementos restantes: ${contenedor.children.length}
            `;
            resultadoDiv.style.backgroundColor = '#f8d7da';
            resultadoDiv.style.borderColor = '#f5c6cb';
            
            console.log('Elemento eliminado');
        } else {
            const resultadoDiv = crearAreaResultados8();
            resultadoDiv.innerHTML = `
                <strong>❌ No hay elementos para eliminar</strong><br>
                • El contenedor está vacío<br>
                • Primero crea algunos elementos<br>
                • Luego podrás eliminarlos con removeChild()
            `;
            resultadoDiv.style.backgroundColor = '#fff3cd';
            resultadoDiv.style.borderColor = '#ffeaa7';
        }
    });
    
    // Evento para insertar elemento
    btnInsertar.addEventListener('click', function() {
        console.log('=== SECCIÓN 8C: Insertar Elemento ===');
        
        const contenedor = document.getElementById('contenedor-dinamico');
        const primerHijo = contenedor.firstElementChild;
        
        // Crear nuevo elemento
        const nuevoDiv = document.createElement('div');
        nuevoDiv.className = 'elemento-dinamico insertado';
        nuevoDiv.textContent = `Elemento insertado al principio #${++contadorElementos}`;
        nuevoDiv.style.backgroundColor = '#fff3cd';
        nuevoDiv.style.border = '1px solid #ffc107';
        nuevoDiv.style.padding = '10px';
        nuevoDiv.style.margin = '5px';
        nuevoDiv.style.borderRadius = '5px';
        nuevoDiv.style.fontWeight = 'bold';
        
        // Insertar antes del primer hijo
        contenedor.insertBefore(nuevoDiv, primerHijo);
        
        const resultadoDiv = crearAreaResultados8();
        resultadoDiv.innerHTML = `
            <strong>✅ Elemento Insertado al Principio</strong><br>
            <strong>Métodos usados:</strong><br>
            • createElement('div') - Crea elemento<br>
            • insertBefore(nuevo, referencia) - Inserta en posición<br>
            <br><strong>Resultado:</strong><br>
            • Texto: "${nuevoDiv.textContent}"<br>
            • Posición: Al principio del contenedor<br>
            • Total elementos: ${contenedor.children.length}
        `;
        resultadoDiv.style.backgroundColor = '#cce7ff';
        resultadoDiv.style.borderColor = '#b3d9ff';
        
        console.log('Elemento insertado:', nuevoDiv);
    });
