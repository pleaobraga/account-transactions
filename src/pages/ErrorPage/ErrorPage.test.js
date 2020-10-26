import React from 'react'
import { shallow } from 'enzyme'
import ErrorPage from './ErrorPage'

describe('ErrorPage', () => {
  const errorPage = shallow(<ErrorPage />)

  it('should render properly', () => {
    expect(errorPage).toMatchSnapshot()
  })
})
