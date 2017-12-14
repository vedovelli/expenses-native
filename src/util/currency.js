
import accounting from 'accounting'

export const formatCurrency = (amount, symbol = 'R$') => {
  // int has no replace() but strings do!
  const receivedAmount = amount.replace != null ? amount : `${amount}`
  const sanitizedAmount = receivedAmount.replace(',', '.')
  return accounting.formatMoney(sanitizedAmount, symbol, 2, ".", ",")
}
