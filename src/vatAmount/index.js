/**
 * It returns the vat amount from an amount without taxes and a tax rate.
 *
 * @param {Number} amountWithoutTaxes
 * @param {Number} taxRate
 * @returns {Number} vatAmount
 */
export default function vatAmount (amountWithoutTaxes, taxRate) {
  const vatAmount =
    (parseFloat(amountWithoutTaxes) * parseFloat(taxRate)) / 100 || 0

  return parseFloat(vatAmount.toFixed(2))
}
