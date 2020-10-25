export const getAccountDetails = (id) => {
  return window.localStorage.getItem(id)
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
    amount: 0,
    transactions: [],
  }

  localStorage.setItem(id, JSON.stringify(newAccount))

  return newAccount
}
