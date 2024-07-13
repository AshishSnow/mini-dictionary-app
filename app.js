const searchData = document.getElementById('searchData');
const searchBtn = document.getElementById('searchBtn');
const resultBox = document.getElementById('resultBox');
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"



searchBtn.addEventListener('click' , ()=>{

let word = searchData.value;

const urlData = `${url}${word}`


fetch(urlData)
.then((res) => res.json())
.then((data)=> {

    resultBox.innerHTML = `
    <h2>${data[0].word}</h2>
    
    <h3><i>Meaning</i></h3>
    
    <p>${data[0].meanings[0].definitions[0].definition}</p> `


})

})


