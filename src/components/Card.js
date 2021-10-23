import { createElement } from '../lib/dom.js'
import './Card.css'

// destructuring assignment

export default function Card({ image, name, weight, moves }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
        <h2>${name}</h2>
        <img class="Card__image" src="${image}" alt="" />
        <spam>  weight of pokemon: ${weight}</spam>
        <spam>  move of pokemon: ${moves}</spam>
    `,
  })

  return el
}
