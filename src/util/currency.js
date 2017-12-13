
export const formatCurrency = (amount, symbol = 'R$') => {
  const currencyFormated = parseFloat(amount, 10).toFixed(2)
  return `${symbol}${currencyFormated}`
}
