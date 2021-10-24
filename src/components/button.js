import './button.css'
import { createElement } from '../lib/dom.js'

export default function button() {
  const button = createElement('button', {
    className: 'button js-button',
    innerText: 'turn',
  })

  button.addEventListener('click', () => {
    console.log('test')
    button.classList.toggle('bg-blue')
  })
  return button
}
