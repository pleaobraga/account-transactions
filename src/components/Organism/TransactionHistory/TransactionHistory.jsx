import React from 'react'
import PropTypes from 'prop-types'
import { TransactionDetail } from '../TransactionDetail'
import './TransactionHistory.scss'

const TransactionHistory = ({ transactions, formButton }) => {
  return (
    <section className="transaction-history">
      <div className="transaction-history__title-content">
        <h2 className="transaction-history__title">Histórico de Transações</h2>
        {formButton()}
      </div>
      <ul className="transaction-history__list">
        {transactions.map(({ amount, id, date }) => (
          <li key={id} className="transaction-history__list-item">
            <TransactionDetail amount={amount} date={date} />
          </li>
        ))}
      </ul>
    </section>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape(TransactionDetail.propTypes)),
  formButton: PropTypes.func.isRequired,
}

export default TransactionHistory
