import React from 'react'
import * as jestDOM from '@testing-library/jest-dom'
import {render, fireEvent} from '@testing-library/react'
import Calculator from '../calculator'

test('renders', () => {
  const {getByText} = render(<Calculator />)

  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton.textContent).toBe('C')
})

expect.extend(jestDOM)

test('the clear button switches from AC to C when there is an entry', () => {
  const {getByText} = render(<Calculator />)
  const clearButton = getByText('AC')

  fireEvent.click(getByText(/3/))
  expect(clearButton).toHaveTextContent('C')

  fireEvent.click(clearButton)
  expect(clearButton).toHaveTextContent('AC')
})
