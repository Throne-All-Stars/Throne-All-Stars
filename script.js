
const charBio = "https://thronesapi.com/api/v2/Characters"

function fetchCharacters() {
    fetch(charBio)
        .then((res) => res.json())
        .then((data) => {
            // const charFullName = (data.id.fullName)
            // console.log(data[32].fullName)
            
            
            const character = data[1].fullName;
            const ul = document.getElementById("Remainder")
            
            data.forEach(character => {
                const favs = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = character.url;
                anchor.textContent = character.fullName;
                console.log(character.fullName)

                favs.appendChild(anchor);
                ul.appendChild(favs);
            });
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

console.log(fetchCharacters())

function fetchFavorites() {
    fetch(charBio)
        .then((res) => res.json())
        .then((data) => {
            const ul = document.getElementById("Favorites-list");

            for (let i = 0; i < 5; i++) {
                const character = data[i];
                const favs = document.createElement('li');
                const anchor = document.createElement('a');
                anchor.href = character.url;
                anchor.textContent = character.fullName;
                console.log(character.fullName);

                favs.appendChild(anchor);
                ul.appendChild(favs);
            }
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

fetchFavorites()

// console.log(fetchFavorites)