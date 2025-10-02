//alert()
const API_URL = "https://dragonball-api.com/api/characters";

function createCharacter(character){
    return `
        <div class="character-card">
            <img class="character-image" src="${character.image}" alt=${character.name}/>
            <h3 class="character-name"> ${character.name}</h3>
            <div>
                ${ 
                character.race
                ? `<div class='character-info'><span class='info-label'>Raza: </span><span class='info-value race-tag'>${character.race}</span></div>`
                : ''
                }
                ${
                    character.gender
                    ? `<div class="info-item"><span class="info-label">Genero: </span><span class="info-value race-tab">${character.gender}</span></div>`
                    : ''
                }
            </div>
        </div>
    `
}

function loadCharacters() {
    const container = document.querySelector("#characters-container")

    fetch(API_URL)
    .then((respuesta)=>{
        console.log(respuesta)
        if(!respuesta.ok){
            throw new Error("Error " + respuesta.status)
        }
        return respuesta.json()
    })
    .then((datos)=>{
        console.log(datos)
        const characters = datos.items
        console.log(characters)
        container.innerHTML = characters.map((character) => createCharacter(character))

    })
    .catch((err)=>{
        console.log(err)
    })
}



loadCharacters()
