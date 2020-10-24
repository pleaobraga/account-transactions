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
  ...otherProps
}) => {
  const hasError = () => {
    has(errors, name) && has(touched, name)
  }

  const className = cx('input', {
    'input--error': hasError(),
  })

  return (
    <div className={className}>
      {label && <label className="input__label">{label}</label>}
      <input
        {...otherProps}
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
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
}

export default Input
