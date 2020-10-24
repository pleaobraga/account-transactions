import React from 'react'
import PropTypes from 'prop-types'
import './CalendarFormat.scss'

const CalendarFormat = ({ date }) => {
  console.log('date', date)

  return (
    <p className="calendar">
      <span className="calendar__day">12</span>
      <span className="calendar__month">may</span>
    </p>
  )
}

CalendarFormat.propTypes = {
  date: PropTypes.string.isRequired,
}

export default CalendarFormat
