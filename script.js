const charBio = "https://thronesapi.com/api/v2/Characters";
const container = document.getElementById("char-container");

let allCharacters = [];

function fetchCharacters() {
    fetch(charBio)
        .then((res) => res.json())
        .then((data) => {
            allCharacters.push(...data);

            data.forEach((element) => {
                const div = document.createElement("div");

                const img = document.createElement("img");
                img.src = element.imageUrl;

                const name = document.createElement("p");
                name.textContent = element.fullName;

                div.appendChild(img);
                div.appendChild(name);

                container.appendChild(div);
            });
        })
        .catch((error) => {
            console.error("Error: ", error);
        });
}
fetchCharacters();

const searchForm = document.querySelector("#form");

searchForm.addEventListener("submit", searchCharacter);

function searchCharacter(e) {
    e.preventDefault();
    const inputValue = e.target.input.value;
    const foundCharacter = allCharacters.find((character) => {
        return character.firstName.toLowerCase() === inputValue.toLowerCase();
    });
    if (foundCharacter) {
        container.innerHTML = "";
        const div = document.createElement("div");

        const img = document.createElement("img");
        img.src = foundCharacter.imageUrl;

        const name = document.createElement("p");
        name.textContent = foundCharacter.fullName;

        div.appendChild(img);
        div.appendChild(name);

        container.appendChild(div);

        const getAllCharacterBtn = document.createElement("button");
        getAllCharacterBtn.innerHTML = "RESET";
        getAllCharacterBtn.addEventListener("click", () => {
            container.innerHTML = "";
            fetchCharacters();
        });
        container.append(getAllCharacterBtn);
    }
    else {
        alert("Character not found");
    }
    e.target.reset();
}
