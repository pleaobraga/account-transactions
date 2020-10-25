import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TransactionHistory } from '../../components/Organism/TransactionHistory'
import { TotalBalance } from '../../components/Molecule/TotalBalance'
import { Button } from '../../components/Atom/Button'
import { NewTransactionForm } from '../../components/Organism/NewTransactionForm'
import { getAccount } from '../../utils/utils'
import Loading from '../../components/Atom/Loading'
import './AccountPage.scss'

const AccountPage = () => {
  const [showForm, setShowForm] = useState(false)
  const [accountDetails, setAccountDetails] = useState(null)
  let { accountId } = useParams()

  useEffect(() => {
    const id = accountId || 0
    const account = getAccount(id)
    setAccountDetails({ ...account })
  }, [getAccount, accountId])

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

  console.log('accountDetails', accountDetails)

  return !accountDetails ? (
    <Loading />
  ) : (
    <main className="page page-account">
      <TotalBalance amount={accountDetails.amount} />
      {showForm && <NewTransactionForm onCancel={hideForm} />}
      <TransactionHistory
        formButton={renderShowFormBtn}
        transactions={accountDetails.transactions}
      />
    </main>
  )
}

export default AccountPage
