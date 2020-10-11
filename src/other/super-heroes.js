const superHeros = [
  {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
  {name: 'Dumbl', powers: ['gravity control', 'magic']},
  {name: 'Apogee', powers: ['gravity control', 'magic']},
  {name: 'Apogee', powers: ['gravity control', 'magic']},
  {name: 'Apogee', powers: ['gravity control', 'fly']},
  {name: 'Jack-Jack', powers: ['shapeshift', 'fly']},
]

export function getFlyingSuperHeros() {
  return superHeros.filter(hero => {
    return hero.powers.includes('fly')
  })
}
