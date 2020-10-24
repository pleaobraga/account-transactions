import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { formatPrice } from '../../../utils/utils'
import './TransationAmount.scss'

const TransationAmount = ({ amount }) => {
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

TransationAmount.propTypes = {
  amount: PropTypes.number.isRequired,
}

export default TransationAmount
