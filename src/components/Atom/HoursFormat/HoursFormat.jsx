import React from 'react'
import PropTypes from 'prop-types'
import { formatFullTime } from '../../../helpers/generalHelpers'
import './HoursFormat.scss'

const HoursFormat = ({ date }) => {
  return (
    <div className="hours-format">
      <i className="material-icons hours-format__icon">schedule</i>
      <span className="hours-format__time">{formatFullTime(date)}</span>
    </div>
  )
}

HoursFormat.propTypes = {
  date: PropTypes.string.isRequired,
}

export default HoursFormat
