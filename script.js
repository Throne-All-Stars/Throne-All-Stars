const charBio = "https://thronesapi.com/api/v2/Characters"

function fetchCharacters() {
    fetch(charBio)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)


            const character = data.fullName;
            const ul = document.getElementById("Remainder")
            const elements = data

            // console.log("images", images)

            elements.forEach(element => {
                console.log(element.imageUrl);

                const div = document.createElement("div");
                const img = document.createElement("img");
                const name = document.createElement("p");

                // console.log("full name:", element.fullName);

                img.src = element.imageUrl;
                name.textContent = element.fullName; // Corrected line

                div.appendChild(img);
                div.appendChild(name); // Append the name element
                document.body.append(div);
            });


            // data.forEach(character => {
            //     const favs = document.createElement('li');
            //     const anchor = document.createElement('a');
            //     // anchor.href = character.url;
            //     anchor.textContent = character.fullName;
            //     console.log(character.fullName)

            //     favs.appendChild(anchor);
            //     ul.appendChild(favs);
            // });
        })
        .catch(error => {
            console.error("Error: ", error);
        });
}

fetchCharacters()