const charBio = "https://anapioficeandfire.com/api/characters/583"

function fetchAndDisplay() {
fetch(charBio)
.then(res => response.json())
.then(data => {
    const minChar = data.results.slice(0,5);
    const ul = document.getElementById("Name")
    
    character.forEach(character => {
        const favs = document.createElement('Favorites');
        const anchor = documen.createElement('anc');
        anchor.href = character.url;
        anchor.TextContent = character.name;
        
        favs.appendChild(anchor);
        ul.appendChild(favs);
    });
})
.catch(error => {
    console.error("Error fetching data:", error);
});
}