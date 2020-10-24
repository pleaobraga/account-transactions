import React from 'react'
import PropTypes from 'prop-types'
import { CalendarFormat } from '../../Atom/CalendarFormat'
import { TransationAmount } from '../../Atom/TransationAmount'
import './TransactionDetail.scss'

const TransactionDetail = () => {
  return (
    <div className="transaction-detail">
      <div className="transaction-detail__date">
        <CalendarFormat />
      </div>
      <div className="transaction-detail__description-wrapper">
        <h3 className="transaction-detail__description-title">
          Descrição do proj
        </h3>
        <span className="transaction-detail__description-date">data</span>
      </div>
      <p className="transaction-detail__value">
        <TransationAmount amount={12} />
      </p>
    </div>
  )
}

TransactionDetail.propTypes = {
  amount: PropTypes.number,
}

export default TransactionDetail
