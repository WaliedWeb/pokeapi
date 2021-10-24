import button from './components/button'
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
      .then(({ name, sprites, weight, moves, height, types /*imageBack*/ }) => {
        container.append(
          Card({
            name,
            image: sprites.front_default,
            weight,
            moves: moves[1].move.name,
            height,
            types: types[0].type.name,
            //imageBack: sprites.back_default,
          }),
          button()
        )
      })
  })
}
