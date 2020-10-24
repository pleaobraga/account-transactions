import React from 'react'
import { storiesOf } from '@storybook/react'
import TransactionHistory from './TransactionHistory'

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

export default storiesOf(
  'Components | Organism/Transaction History',
  module
).add('default', () => <TransactionHistory transactions={transactions} />, {
  info: { inline: true, header: false },
})
