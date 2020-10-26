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
  const newDate = new Date(date)

  const hours = formatTime(newDate.getHours())
  const minutes = formatTime(newDate.getMinutes())

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
