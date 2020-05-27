import vatAmount from './index.js'

describe('vatAmount', () => {
  it('returns correct amount', () => {
    expect(vatAmount(1150, 20)).toEqual(230)
  })
})
