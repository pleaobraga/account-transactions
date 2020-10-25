import React, { useState } from 'react'
import { TransactionHistory } from '../../components/Organism/TransactionHistory'
import { TotalBalance } from '../../components/Molecule/TotalBalance'
import { Button } from '../../components/Atom/Button'
import { NewTransactionForm } from '../../components/Organism/NewTransactionForm'

import './AccountPage.scss'

const now = new Date()

const transactions = [
  {
    id: 0,
    date: now,
    amount: 3200000000000000,
    description: 'Description',
  },
  {
    id: 1,
    date: now,
    amount: -32,
    description: 'Description',
  },
]

const AccountPage = () => {
  const [showForm, setShowForm] = useState(false)

  const hideForm = () => {
    setShowForm(false)
  }

  const openForm = () => {
    setShowForm(true)
  }

  const renderShowFormBtn = () =>
    !showForm && (
      <Button className="open-form-btn" onClick={openForm}>
        <span className="open-form-btn__content">
          <i className="material-icons btn__icon">import_export</i>
          Criar Transação
        </span>
      </Button>
    )

  return (
    <main className="page page-account">
      <TotalBalance amount={500} />
      {showForm && <NewTransactionForm onCancel={hideForm} />}
      <TransactionHistory
        formButton={renderShowFormBtn}
        transactions={transactions}
      />
    </main>
  )
}

export default AccountPage
