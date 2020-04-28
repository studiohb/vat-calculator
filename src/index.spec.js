import { vatAmount, amountWithTaxes } from './index.js'

describe('Number Helpers', () => {
  test('vatAmount', () => {
    expect(vatAmount(1150, 20)).toEqual(230)
  })

  test('amountWithTaxes', () => {
    expect(amountWithTaxes(1150, 20)).toEqual(1380)
  })
})
