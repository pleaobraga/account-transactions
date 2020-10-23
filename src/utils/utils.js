export const simulateRequest = (data) => {
  var promise = new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve({ data })
    }, 3000)
  })
  return promise
}

export const formatPrice = (amount, currency = 'BRL', locale = 'de-DE') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount)
}
