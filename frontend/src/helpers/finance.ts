export const convertNumberToCurrencyNotation = (price: number): string =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    notation: 'compact'
  }).format(Math.floor(price));
