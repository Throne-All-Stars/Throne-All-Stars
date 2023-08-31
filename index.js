const apiUrl = "https://anapioficeandfire.com/api/characters/583";
const apiUrlTwo = "https://thronesapi.com/api/v2/Characters";

fetch ("https://thronesapi.com/api/v2/Characters")
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data[1].fullName)
    })


    const apiUrl = "https://anapioficeandfire.com/api/characters/583";
const apiUrlTwo = "https://thronesapi.com/api/v2/Characters";


const remainderList = document.querySelector("#Remainder");
console.log(remainderList);

// DOM = document object model 

const newElementInRemainderDiv = document.createElement('div');
newElementInRemainderDiv.innerText = "Hello"
remainderList.appendChild(newElementInRemainderDiv)

const printJonSeasons = (data) => { // take data 
    const season = document.createElement('p') // create an element for the data  //create a new element to store your text. "season" is the name of your p tag in js. 
    season.innerText = data //set the innerText of the elemtn to the data // save your data (text) to the element ypu created   
    console.log(data); // log the data // console.log to view your data 
    remainderList.append(season) // append the element to the document // add the data to the document by appending it to an element. 
}

fetch (apiUrl) 
    .then ((response) => { // recieve data from API 
        return response.json() // transate data to a language js can understand for future use and manipulation. 
    })
    .then((data) => { // .then pulls the data recieved after tanslation and acts upon it. 
        data.tvSeries.forEach((series) => // search through the translated data, target the tvSeries array using dot notation, call the forEach method on the array in order to log each season to the console.
        printJonSeasons(series)) 
    })
    
//  
    
    
fetch (apiUrl) 
    .then ((response) => {
        return response.json()
    })
    .then((data) => {
        data.tvSeries.forEach((series) => console.log(series))
    })
    
    
    