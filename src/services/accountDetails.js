export const getAccountDetails = (id) => {
  const account = window.localStorage.getItem(id)

  debugger

  try {
    return JSON.parse(account)
  } catch {
    return { error: 'error' }
  }
}

export const postAccountDetails = (id, transaction) => {
  const account = getAccountDetails(id)

  account.amount += transaction.amount
  account.transactions.unshift(transaction)

  localStorage.setItem(id, JSON.stringify(account))

  return account
}

export const putAccountDetails = (id) => {
  const newAccount = {
    id,
    amount: 0,
    transactions: [],
  }

  localStorage.setItem(id, JSON.stringify(newAccount))

  return newAccount
}
