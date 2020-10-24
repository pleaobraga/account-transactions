import React from 'react'
import PropTypes from 'prop-types'
import './CalendarFormat.scss'

const CalendarFormat = ({ date }) => {
  return (
    <div className="calendar">
      <div className="calendar__year-wrapper">
        <span className="calendar__year">2020</span>
      </div>
      <span className="calendar__day">12</span>
      <span className="calendar__month">may</span>
    </div>
  )
}

CalendarFormat.propTypes = {
  date: PropTypes.string.isRequired,
}

export default CalendarFormat
