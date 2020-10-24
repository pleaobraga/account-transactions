import React from 'react'
import { TransactionHistory } from '../../components/Organism/TransactionHistory'
import { TotalBalance } from '../../components/Molecule/TotalBalance'

import './AccountPage.scss'

const now = new Date()

const transactions = [
  {
    id: 0,
    date: now,
    amount: 32,
  },
  {
    id: 1,
    date: now,
    amount: -32,
  },
]

const AccountPage = () => {
  return (
    <main className="page page-welcome">
      <TotalBalance amount={5000} />
      <TransactionHistory transactions={transactions} />
    </main>
  )
}

export default AccountPage
