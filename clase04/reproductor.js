const playList = [];

console.log(playList)

function addSong() {
    console.log("Adding song...")
    const title = prompt("Enter song title:");
    const artist = prompt("Enter artist name:");
    const duration = Number(prompt("Enter song duration (in seconds):"));

    if(title && artist && !isNaN(duration)){
        playList.push({titulo: title, artista: artist, duracion: duration})
    }
}

function menu() {
    let option;
    do {
        option = prompt("Canciones\n"+ 
        "1. Agregar canción\n" +
        "2. Mostrar lista de canciones\n" +
        "3. Reproducir canción\n" +
        "4. Eliminar canción\n" +
        "5. Salir\n" +
        "Seleccione una opción:");

        switch (option) {
          case "1":
            addSong();
            break;
          case "2":
            //mostrarLista()
            console.log(playList);
            break;
          case "3":
            //reproducirCancion()
            console.log("");
            break;
          case "4":
            //eliminarCancion()
            console.log("");
            break;
          case "5":
            console.log("");
            break;
          default: 
            alert("Opción no válida");
        }
    } while (option !== '5');
}


menu();
