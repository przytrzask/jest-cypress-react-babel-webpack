import {getFlyingSuperHeros} from '../super-heroes'

test('Flying superHeros', () => {
  // good solution but you have to manually update on every change
  //   expect(getFlyingSuperHeros()).toEqual([
  //     {name: 'Dynaguy', powers: ['disintegration ray', 'fly']},
  //     {name: 'Apogee', powers: ['gravity control', 'fly']},
  //   ])

  expect(getFlyingSuperHeros()).toMatchInlineSnapshot(`
    Array [
      Object {
        "name": "Dynaguy",
        "powers": Array [
          "disintegration ray",
          "fly",
        ],
      },
      Object {
        "name": "Apogee",
        "powers": Array [
          "gravity control",
          "fly",
        ],
      },
      Object {
        "name": "Jack-Jack",
        "powers": Array [
          "shapeshift",
          "fly",
        ],
      },
    ]
  `)
})
