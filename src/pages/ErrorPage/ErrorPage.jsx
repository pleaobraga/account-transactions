import React from 'react'
import './ErrorPage.scss'

const ErrorPage = () => {
  return (
    <section className="page page-error">
      <i className="material-icons page-error__icon">error_outline</i>
      <p className="page-error__text">This page could not be loaded</p>
    </section>
  )
}

export default ErrorPage
