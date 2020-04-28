export function vatAmount (amountWithoutTaxes, tax) {
  const vatAmount =
    (parseFloat(amountWithoutTaxes) * parseFloat(tax)) / 100 || 0

  return parseFloat(vatAmount.toFixed(2))
}

export function amountWithTaxes (amountWithoutTaxes, tax) {
  return amountWithoutTaxes + vatAmount(amountWithoutTaxes, tax)
}

export function amountWithoutTaxes (amountWithTaxes, tax) {
  return parseFloat(amountWithTaxes) / (1 + parseFloat(tax) / 100) || 0
}
