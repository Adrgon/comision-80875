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

async function loadCharacters() {
    const container = document.querySelector("#characters-container");
    const error = document.querySelector("#error-message");
    const loading = document.getElementById("loading")
    
    error.style.display = "none";
    container.style.display = "block";
    loading.style.display = "block";


    try {
      const response = await fetch(API_URL); // tarda
      
    if (!response.ok) {
      throw new Error("Error " + response.status);
    }
      const data = await response.json();
      console.log(data);
      const characters = data.items;
      container.innerHTML = characters
        .map((character) => createCharacter(character))
        .join("");
    } catch (err) {
        error.style.display = "block"
        container.style.display = "none"
        document.querySelector('#error-message').textContent = err.message
    } finally {
        loading.style.display = "none"
    }


}


setTimeout(loadCharacters, 2000)

//loadCharacters()
