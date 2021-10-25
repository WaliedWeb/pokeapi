import Card from './components/Card'
import { getBySelector } from './lib/dom'
import './styles/index.css'

const url = 'https://pokeapi.co/api/v2/pokemon'

fetch(url)
  .then(res => res.json())
  .then(data => renderCards(data.results))

function renderCards(pokemons) {
  const container = getBySelector('#cards-container')

  pokemons.forEach(({ url }) => {
    fetch(url)
      .then(res => res.json())
      .then(({ name, sprites, weight, moves, height, types }) => {
        container.append(
          Card({
            name,
            image: sprites.front_default,
            weight,
            moves: moves[1].move.name,
            height,
            types: types[0].type.name,
            imageBack: sprites.back_default,
          })
        )
      })
  })
}

function button() {
  const Card = document.querySelector('[data-js="Card"]')
  const button = Card.querySelector('[data-js="Card__button"]')

  Card.forEach(button.addEventListener('click', () => console.log('Hey')))
}
button()
