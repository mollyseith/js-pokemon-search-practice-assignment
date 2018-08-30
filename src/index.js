document.addEventListener("DOMContentLoaded", run)
  //pokemons is a variable imported from db.json via index.html as a script tag
  //console.log(pokemons)

function createContainer(name, front){
  const maindiv = document.getElementById('container')
  const imgdiv = maindiv.appendChild(document.createElement('div'))
  imgdiv.className = "pokemon-container"
  imgdiv.style = "width:230px;margin:10px;background:#fecd2f;color:#2d72fc"
  const head = imgdiv.appendChild(document.createElement('h1'))
  head.innerText = name
  head.className = "center-text"
  const imgdiv2 = imgdiv.appendChild(document.createElement('div'))
  const img = imgdiv2.appendChild(document.createElement('img'))
  img.src = front
  img.id = name
  imgdiv2.className = "center-text"
  const p = imgdiv.appendChild(document.createElement('p'))
  p.innerText = "flip card"
  p.className = "center-text"
  flipCard();
}

function filter(){
  const search = document.getElementById('pokemon-search-input').value
  const filteredpokes = pokemons.filter(pokemon => pokemon.name.includes(search))
  getInfo(filteredpokes);
}

function filterListener(){
  let pokemonContainer = document.querySelector("#pokemon-container")
  pokemonContainer.innerHTML = ""
  const search = document.getElementById('pokemon-search-input')
  search.addEventListener("keyup", filter)
}

function getInfo(array){
  for (let p of array){
    let pname = p.name
    let pfront = p.sprites.front
    let pback = p.sprites.back
    createContainer(pname, pfront);}
}

function flipCard(){
  const allpokes = document.querySelectorAll('p.center-text')
  allpokes.forEach(element => {element.addEventListener("click", function flip(e){
    const pokeimage = e.path[1].querySelector('img')
    const pokename = pokeimage.id
    const pokeobject = pokemons.find(p => {return p.name === pokename})
    if (pokeimage.src == pokeobject.sprites.front){
      pokeimage.src = pokeobject.sprites.back}
    else{
      pokeimage.src = pokeobject.sprites.front}})
    })}

function run(){
  filterListener();}
