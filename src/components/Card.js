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
  id,
}) {
  const el = createElement('section', {
    className: 'Card',
    innerHTML: `
        <h2 class="Card__heading">${name}</h2>
        <img data-js="Cardimage" class="Card__image" src="${image}" alt="" />
        <img data-js="CardBackimage" class="Card__image hidden" src="${imageBack}" alt="" />
        <img data-js="shinyFront" class="Card__image hidden" src="${image}" alt="" />
        <img data-js="shinyBack" class="Card__image hidden" src="${imageBack}" alt="" />
        <div class= "Card__text">
        <spam>  height / weight : ${height}cm / ${weight}kg</spam>
        <spam>  move of pokemon: ${moves}</spam>
        <spam>  type of pokemon: ${types}</spam>
        <button data-js="Card__button" > turn it! </button>
        </div>
    `,
  })

  el.style.order = id

  const button = el.querySelector('[data-js="Card__button"]')
  const frontImage = el.querySelector('[data-js="Cardimage"]')
  const backImage = el.querySelector('[data-js="CardBackimage"]')

  button.addEventListener('click', () => {
    frontImage.classList.toggle('hidden')
    backImage.classList.toggle('hidden')
  })

  frontImage.addEventListener('click', () => {
    frontImage.classList.toggle('rotate')
  })

  backImage.addEventListener('click', () => {
    backImage.classList.toggle('rotate')
  })

  return el
}
