import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Calendar } from '../../Molecule/Calendar'
import { HoursFormat } from '../../Atom/HoursFormat'
import { TransactionAmount } from '../../Atom/TransactionAmount'
import './TransactionDetail.scss'

const TransactionDetail = ({ amount, date, description }) => {
  const className = cx('transaction-detail', {
    'transaction-detail--negative': amount < 0,
    'transaction-detail--positive': amount >= 0,
  })

  return (
    <div className={className}>
      <div className="description">
        <h3 className="description__title">{description}</h3>
        <p className="description__value">
          <TransactionAmount amount={amount} />
        </p>
      </div>
      <div className="transaction-detail__date">
        <HoursFormat date={date} />
        <Calendar date={date} />
      </div>
    </div>
  )
}

TransactionDetail.propTypes = {
  amount: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default TransactionDetail
