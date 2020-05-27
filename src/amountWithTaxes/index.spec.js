import amountWithTaxes from './index.js'

describe('amountWithTaxes', () => {
  it('returns correct amount', () => {
    expect(amountWithTaxes(1150, 20)).toEqual(1380)
  })
})
