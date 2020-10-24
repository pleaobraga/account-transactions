import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

const Button = ({ children, className, onClick, ...otherProps }) => {
  return (
    <button {...otherProps} className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
}

Button.defaultProps = {
  className: '',
}

export default Button
