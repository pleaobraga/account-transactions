import { OPERATION_NEGATIVE, OPERATION_POSITIVE } from './constants'
import { has, get } from 'lodash'
import {
  getAccountDetails,
  putAccountDetails,
} from '../services/accountDetails'

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

export const hasObjectAttributes = (obj, attibutes) => {
  const isSameType = (type, value) => {
    switch (type) {
      case 'array': {
        return Array.isArray(value)
      }

      case 'date': {
        return !Number.isNaN(Date.parse(value))
      }

      default: {
        return typeof value === type
      }
    }
  }

  for (let i = 0; i < attibutes.length; i++) {
    if (
      !has(obj, attibutes[i].name) ||
      !isSameType(attibutes[i].type, get(obj, attibutes[i].name))
    ) {
      return false
    }
  }

  return true
}

export const isAccountDataValid = (account) => {
  const accountAttr = [
    { name: 'id', type: 'string' },
    { name: 'amount', type: 'number' },
    { name: 'transactions', type: 'array' },
  ]

  if (!hasObjectAttributes(account, accountAttr)) {
    return false
  }

  if (account.transactions.length > 0) {
    const transactionAttr = [
      { name: 'description', type: 'string' },
      { name: 'amount', type: 'number' },
      { name: 'date', type: 'date' },
    ]

    const operationAttr = [
      { name: 'name', type: 'string' },
      { name: 'label', type: 'string' },
      { name: 'operationType', type: 'string' },
    ]

    for (let i = 0; i < account.transactions.length; i++) {
      const transaction = account.transactions[i]
      const { operation } = transaction

      if (!hasObjectAttributes(transaction, transactionAttr)) {
        return false
      }

      if (!hasObjectAttributes(operation, operationAttr)) {
        return false
      }
    }
  }

  return true
}

export const getAccount = (id) => {
  const account = getAccountDetails(id)

  if (account) {
    if (!isAccountDataValid(account)) {
      return { error: { message: 'Dados da conta corrompida' } }
    }

    return account
  }

  return putAccountDetails(id)
}
