import { createElement } from '../lib/dom.js'
import './Card.css'

// destructuring assignment

export default function Card({ image, name, weight, moves, height, types }) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
        <h2 class="Card__heading">${name}</h2>
        <img class="Card__image" src="${image}" alt="" />
        <div class= "Card__text">
        <span>  height / weight : ${height}cm / ${weight}kg</span>
        <span>  move of pokemon: ${moves}</span>
        <span>  type of pokemon: ${types}</span>
        </div>
    `,
  })

  return el
}
