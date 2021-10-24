import { createElement } from '../lib/dom.js'
import './Card.css'

// destructuring assignment

export default function Card({
  image,
  name,
  weight,
  moves,
  height,
  types,
  imageBack,
}) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
        <h2 class="Card__heading">${name}</h2>
        <img data-js="Cardimage" class="Card__image" src="${image}" alt="" />
        <img data-js="CardBackimage" class="Card__image hidden" src="${imageBack}" alt="" />
        <div class= "Card__text">
        <spam>  height / weight : ${height}cm / ${weight}kg</spam>
        <spam>  move of pokemon: ${moves}</spam>
        <spam>  type of pokemon: ${types}</spam>
        </div>
    `,
  })
  el.dataset.js = 'Card'
  return el
}
