import React from 'react'
import { mount } from 'enzyme'
import HoursFormat from './HoursFormat'

describe('Hours Format', () => {
  const date = new Date()
  const wrapper = mount(<HoursFormat date={date} />)

  it('render wrapper properly', () => {
    expect(wrapper.find('.hours-format').length).toBe(1)
  })

  it('render icon properly', () => {
    expect(wrapper.find('.hours-format__icon').length).toBe(1)
  })

  it('render time properly', () => {
    expect(wrapper.find('.hours-format__time').length).toBe(1)
  })
})
