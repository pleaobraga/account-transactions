import React from 'react'
import PropTypes from 'prop-types'
import { CalendarFormat } from '../../Atom/CalendarFormat'
import { HoursFormat } from '../../Atom/HoursFormat'
import { TransationAmount } from '../../Atom/TransationAmount'
import './TransactionDetail.scss'

const TransactionDetail = ({ amount, date }) => {
  return (
    <div className="transaction-detail">
      <div className="description">
        <h3 className="description__title">Descrição do proj</h3>
        <p className="description__value">
          <TransationAmount amount={amount} />
        </p>
      </div>
      <div className="transaction-detail__date">
        <HoursFormat date={date} />
        <CalendarFormat date={date} />
      </div>
    </div>
  )
}

TransactionDetail.propTypes = {
  amount: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
}

export default TransactionDetail
