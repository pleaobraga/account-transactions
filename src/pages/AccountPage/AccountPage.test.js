import React from 'react'
import { shallow } from 'enzyme'
import WelcomePage from './WelcomePage'

describe('welcomePage', () => {
  const welcomePage = shallow(<WelcomePage />)

  it('render properly', () => {
    expect(welcomePage).toMatchSnapshot()
  })
})
