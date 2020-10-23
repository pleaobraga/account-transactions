import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <h1 className="card__title">{title}</h1>
      <p className="card__text">{text}</p>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Card
