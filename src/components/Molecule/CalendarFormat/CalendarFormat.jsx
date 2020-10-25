import React from 'react'
import PropTypes from 'prop-types'
import { monthName } from '../../../utils/utils'
import './CalendarFormat.scss'

const CalendarFormat = ({ date }) => {
  const newDate = new Date(date)

  return (
    <div className="calendar">
      <div className="calendar__year-wrapper">
        <span className="calendar__year">{newDate.getFullYear()}</span>
      </div>
      <span className="calendar__day">{newDate.getDate()}</span>
      <span className="calendar__month">{monthName[newDate.getMonth()]}</span>
    </div>
  )
}

CalendarFormat.propTypes = {
  date: PropTypes.object.isRequired,
}

export default CalendarFormat
