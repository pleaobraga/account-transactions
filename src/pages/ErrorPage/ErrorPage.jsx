import React from 'react'
import PropTypes from 'prop-types'

import './ErrorPage.scss'

const ErrorPage = ({ message }) => {
  return (
    <section className="page page-error">
      <i className="material-icons page-error__icon">error_outline</i>
      <p className="page-error__text">{message}</p>
    </section>
  )
}

ErrorPage.propTypes = {
  message: PropTypes.string,
}

ErrorPage.defaultProps = {
  message: 'This page could not be loaded',
}

export default ErrorPage
