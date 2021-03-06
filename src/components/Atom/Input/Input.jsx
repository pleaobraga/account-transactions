import React from 'react'
import PropTypes from 'prop-types'
import { has, get } from 'lodash'
import cx from 'classnames'
import './Input.scss'

const Input = ({
  label,
  name,
  errors,
  handleChange,
  touched,
  handleBlur,
  className,
  ...otherProps
}) => {
  const hasError = () => has(errors, name) && has(touched, name)

  const inputClasses = cx(`input ${className}`, {
    'input--error': hasError(),
  })

  return (
    <div className={inputClasses}>
      {label && <label className="input__label">{label}</label>}
      <input
        {...otherProps}
        onBlur={handleBlur}
        className="input__field"
        name={name}
        onChange={handleChange}
      />
      {hasError() && <p className="input__error-text">{get(errors, name)}</p>}
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  className: PropTypes.string,
}

Input.defaultProps = {
  className: '',
}

export default Input
