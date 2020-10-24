import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../../../utils/utils'
import './TotalBalance.scss'

const TotalBalance = ({ amount }) => {
  return (
    <div className="balance">
      <h2 className="balance__title">Saldo Total</h2>
      <p className="balance__value">{formatPrice(amount)}</p>
    </div>
  )
}

TotalBalance.propTypes = {
  amount: PropTypes.number.isRequired,
}

export default TotalBalance
