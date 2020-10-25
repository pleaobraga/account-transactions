import React from 'react'
import PropTypes from 'prop-types'
import { TransactionDetail } from '../TransactionDetail'
import './TransactionHistory.scss'

const TransactionHistory = ({ transactions, formButton }) => {
  const renderEmptyList = () => (
    <p className="transaction-history__empty-list">
      Voce ainda não possui nenhuma transação
    </p>
  )

  const renderTransaction= () => (
    <ul className="transaction-history__list">
      {transactions.map(({ amount, id, date }) => (
        <li key={id} className="transaction-history__list-item">
          <TransactionDetail amount={amount} date={date} />
        </li>
      ))}
    </ul>
  )

  return (
    <section className="transaction-history">
      <div className="transaction-history__title-content">
        <h2 className="transaction-history__title">Histórico de Transações</h2>
        {formButton()}
      </div>
      {transactions.length > 0 ? renderTransaction() : renderEmptyList()}
    </section>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape(TransactionDetail.propTypes)),
  formButton: PropTypes.func.isRequired,
}

export default TransactionHistory
