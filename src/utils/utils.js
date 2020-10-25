import { OPERATION_NEGATIVE, OPERATION_POSITIVE } from './constants'
import {
  getAccountDetails,
  putAccountDetails,
} from '../services/accountDetails'

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

export const operations = [
  {
    name: 'withdraw',
    label: 'Retirada',
    operationType: OPERATION_NEGATIVE,
  },
  {
    name: 'deposit',
    label: 'Deposito',
    operationType: OPERATION_POSITIVE,
  },
]

export const getAccount = (id) => {
  const account = getAccountDetails(id)

  if (account) return account

  return putAccountDetails(id)
}
