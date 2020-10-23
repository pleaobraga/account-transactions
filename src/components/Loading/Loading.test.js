import React from 'react'
import { mount } from 'enzyme'
import Loading from './Loading'

describe('Loading', () => {
  let loading = mount(<Loading />)

  it('render proprely', () => {
    expect(loading).toMatchSnapshot()
  })
})
