/**
 * It returns the amount without taxes
 * @param {Number} amountWithTaxes
 * @param {Number} taxRate
 */
export default function amountWithoutTaxes (amountWithTaxes, taxRate) {
  return parseFloat(amountWithTaxes) / (1 + parseFloat(taxRate) / 100) || 0
}
