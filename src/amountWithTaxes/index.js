import vatAmount from '../vatAmount'

/**
 * It returns the amount with taxes from the amount without taxes and a tax rate.
 *
 * @param {Number} amountWithoutTaxes
 * @param {Number} taxRate
 * @returns {Number} amount with taxes
 */
export default function amountWithTaxes (amountWithoutTaxes, taxRate) {
  return amountWithoutTaxes + vatAmount(amountWithoutTaxes, taxRate)
}
