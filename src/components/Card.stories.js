import Card from './Card'

export default {
  title: 'components/Card',
  component: Card,
}

export const Default = () =>
  Card({
    name: 'ivysaur',
    weight: '130',
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png',
    moves: 'Atakke',
    height: '23',
    types: 'poison',
  })
