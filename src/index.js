//import Example from './components/Example'
//import { getBySelector } from './lib/dom'
import './styles/index.css'

const url = 'https://pokeapi.co/api/v2/pokemon/'

fetch(url)
  .then(res => res.json())
  .then(data => console.log(data.results))
/*
function renderCards(pokemons) {
  const pokeContainer = getBySelector('#pokemon-container')
  pokemons.forEach(pokemon => {
    pokeContainer.innerHTML =
      pokeContainer.innerHTML + `<div>${pokemon.name}</div>`
  })
}

renderCards(pokemons)

getBySelector('#app').append(example)
*/
