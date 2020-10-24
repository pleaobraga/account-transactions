import React from 'react'
import PropTypes from 'prop-types'
import { has, get } from 'lodash'
import cx from 'classnames'
import './Select.scss'

const Select = ({
  label,
  name,
  errors,
  handleChange,
  touched,
  children,
  values,
  ...otherProps
}) => {
  const hasError = () => has(errors, name) && has(touched, name)
  const value = get(values, name)

  const className = cx('select', {
    'select--error': hasError(),
  })

  return (
    <div className={className}>
      {label && <label className="select__label">{label}</label>}
      <select
        {...otherProps}
        className="select__field"
        name={name}
        onChange={handleChange}
      >
        {value === -1 && (
          <option selected="selected" value={-1}>
            Selecione uma opção
          </option>
        )}
        {children}
      </select>
      {hasError() && <p className="select__error-text">{get(errors, name)}</p>}
    </div>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  values: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  touched: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Select
