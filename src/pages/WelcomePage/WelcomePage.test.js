import React from 'react'
import { shallow } from 'enzyme'
import WelcomePage from './WelcomePage'

describe('welcomePage', () => {
  const welcomePage = shallow(<WelcomePage />)

  it('render proprely', () => {
    expect(welcomePage).toMatchSnapshot()
  })
})
