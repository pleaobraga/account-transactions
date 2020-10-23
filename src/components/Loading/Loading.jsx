import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './LoaderIcon'
import './Loading.scss'

const Loading = ({ className, color }) => {
  return (
    <div className={`loading ${className}`}>
      <LoaderIcon color={color} />
    </div>
  )
}

Loading.defaultProps = {
  color: '#298a95'
}

Loading.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
}

export default React.memo(Loading)
