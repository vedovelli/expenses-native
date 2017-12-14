
export const formatCurrency = (amount, symbol = 'R$') => {
  const sanitizedAmount = amount.replace(',', '.')
  const currencyFormated = parseFloat(sanitizedAmount, 10).toFixed(2)
  return `${symbol}${currencyFormated}`
}
