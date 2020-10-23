import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

const SearchBar = ({ title, text }) => {
  return (
    <div>
      <span>Manyfyglass<span> <input onChange={} onInput={} /><button>Seach</button>
      thotlle
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Card
