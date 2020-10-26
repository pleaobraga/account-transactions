import React from 'react'
import { mount } from 'enzyme'
import ErrorPage from './ErrorPage'

describe('ErrorPage', () => {
  const wrapper = mount(<ErrorPage />)

  it('should render properly', () => {
    expect(wrapper.find(ErrorPage).length).toBe(1)
  })
})
