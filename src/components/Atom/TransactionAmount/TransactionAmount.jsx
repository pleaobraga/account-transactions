import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { formatPrice } from '../../../helpers/generalHelpers'
import './TransactionAmount.scss'

const TransactionAmount = ({ amount }) => {
  const className = cx('transition-amount', {
    'transition-amount--negative': amount < 0,
    'transition-amount--positive': amount >= 0,
  })

  return (
    <span className={className}>
      {amount >= 0 && '+'}
      {formatPrice(amount)}
    </span>
  )
}

TransactionAmount.propTypes = {
  amount: PropTypes.number.isRequired,
}

export default TransactionAmount
