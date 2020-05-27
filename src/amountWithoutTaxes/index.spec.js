import amountWithoutTaxes from './index.js'

describe('amountWithoutTaxes', () => {
  it('returns correct amount', () => {
    expect(amountWithoutTaxes(1380, 20)).toEqual(1150)
  })
})
