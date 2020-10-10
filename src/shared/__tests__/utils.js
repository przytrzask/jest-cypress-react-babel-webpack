import {getFormattedValue} from '../utils'

test('getFormatedValue', () => {
  expect(getFormattedValue('1234.0')).toBe('1,234.0')
})
