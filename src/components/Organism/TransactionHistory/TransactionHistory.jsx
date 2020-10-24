import React from 'react'
import PropTypes from 'prop-types'
import { TransactionDetail } from '../TransactionDetail'
import './TransactionHistory.scss'

const TransactionHistory = ({ transactions }) => {
  return (
    <div className="transaction-history">
      <h2 className="transaction-history__title">Histórico de Transações</h2>
      <ul className="transaction-history__list">
        {transactions.map(({ amount, id, date }) => (
          <li key={id} className="transaction-history__list-item">
            <TransactionDetail amount={amount} date={date} />
          </li>
        ))}
      </ul>
    </div>
  )
}

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape(TransactionDetail.propTypes)),
}

export default TransactionHistory
