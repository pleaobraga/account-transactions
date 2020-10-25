import React from 'react'
import PropTypes from 'prop-types'
import { monthName } from '../../../utils/utils'
import './Calendar.scss'

const Calendar = ({ date }) => {
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

Calendar.propTypes = {
  date: PropTypes.object.isRequired,
}

export default Calendar
