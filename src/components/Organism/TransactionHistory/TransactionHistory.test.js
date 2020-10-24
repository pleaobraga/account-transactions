import React from 'react'
import { shallow } from 'enzyme'
import Card from './Card'

describe('Card', () => {
  const card = shallow(<Card title="Test" text="test" />)

  it('render proprely', () => {
    expect(card).toMatchSnapshot()
  })
})
