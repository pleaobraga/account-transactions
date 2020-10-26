import React from 'react'
import PropTypes from 'prop-types'
import { formatPrice } from '../../../helpers/generalHelpers'
import './TotalBalance.scss'

const TotalBalance = ({ amount }) => {
  return (
    <div className="balance">
      <h1 className="balance__title">Saldo Total</h1>
      <p className="balance__value">{formatPrice(amount)}</p>
    </div>
  )
}

TotalBalance.propTypes = {
  amount: PropTypes.number.isRequired,
}

export default TotalBalance
