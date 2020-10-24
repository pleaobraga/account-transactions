export const simulateRequest = (data) => {
  var promise = new Promise(function (resolve) {
    window.setTimeout(function () {
      resolve({ data })
    }, 3000)
  })
  return promise
}

export const formatPrice = (amount, locale = 'pt-BR', currency = 'BRL') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export const formatTime = (time) => {
  if (time < 10) {
    return '0' + time
  }

  return time
}

export const formatFullTime = (date) => {
  const hours = formatTime(date.getHours())
  const minutes = formatTime(date.getMinutes())

  return `${hours}:${minutes}`
}

export const monthName = [
  'Jan',
  'Fev',
  'Mar',
  'Abr',
  'Mai',
  'Jun',
  'Jul',
  'Ago',
  'Set',
  'Out',
  'Nov',
  'Dez',
]
