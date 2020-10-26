import {
  getAccountDetails,
  postAccountDetails,
  putAccountDetails,
} from './accountDetails'

const now = new Date('10-25-2020 22:43')

const transaction = {
  id: 12,
  date: now,
  amount: 100,
}

const account = {
  id: 12,
  amount: 0,
  transactions: [],
}

const accountUpdated = {
  id: 12,
  amount: 100,
  transactions: [transaction],
}

describe('accountDetails', () => {
  it('should create new account', () => {
    expect(putAccountDetails(12)).toStrictEqual(account)
  })

  it('should get new account', () => {
    expect(getAccountDetails(12)).toStrictEqual(account)
  })

  it('should update new account', () => {
    expect(postAccountDetails(12, transaction)).toStrictEqual(accountUpdated)
  })

  it('should get new account', () => {
    const result = JSON.stringify(accountUpdated)

    expect(getAccountDetails(12)).toStrictEqual(JSON.parse(result))
  })
})
