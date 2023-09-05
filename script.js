const charBio = "https://thronesapi.com/api/v2/Characters";

function fetchCharacters() {
    fetch(charBio)
        .then((res) => res.json())
        .then((data) => {
            const container = document.getElementById("char-container");

            data.forEach(element => {
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
        .catch(error => {
            console.error("Error: ", error);
        });
}

fetchCharacters();

