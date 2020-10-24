import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { CalendarFormat } from '../../Molecule/CalendarFormat'
import { HoursFormat } from '../../Atom/HoursFormat'
import { TransationAmount } from '../../Atom/TransationAmount'
import './TransactionDetail.scss'

const TransactionDetail = ({ amount, date }) => {
  const className = cx('transaction-detail', {
    'transaction-detail--negative': amount < 0,
    'transaction-detail--positive': amount >= 0,
  })

  return (
    <div className={className}>
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
  id: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
}

export default TransactionDetail
